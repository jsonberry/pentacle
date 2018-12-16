import { HttpRequest } from '@marblejs/core';
import { AxiosResponse } from 'axios';
import { Inject, Injectable } from 'injection-js';
import { from, Observable, of, OperatorFunction, range } from 'rxjs';
import { hasProps } from 'rxjs-toolkit';
import {
  map,
  mergeMap,
  pluck,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { EntityRequest, EntityState, EntityTypeUnion } from '../common/models';
import { HttpService } from './http.service';
import { URL_BASE_TOKEN } from './injection-tokens';
import { StoreService } from './store.service';

@Injectable()
export abstract class EntitiesDao<T> {
  abstract readonly type: EntityTypeUnion;
  abstract readonly endpoint: string;
  abstract transducer: (stream$: Observable<any>) => Observable<T>;
  abstract reducer: OperatorFunction<T, EntityState<T>>;

  constructor(
    private http: HttpService,
    private store: StoreService,
    @Inject(URL_BASE_TOKEN) private urlBase: string,
  ) {}

  private get resource(): string {
    return `${this.urlBase}${this.endpoint}`;
  }

  public newRequest$(): EntityRequest<T> {
    return from(this.http.head(this.resource)).pipe(
      switchMap(({ headers }) => {
        const totalPages = Number(headers['x-wp-totalpages']);
        return totalPages > 0 ? range(1, totalPages) : of(1);
      }),
      mergeMap(page =>
        this.http.get(this.resource, {
          params: {
            page,
          },
        }),
      ),
      hasProps('data'),
      pluck<AxiosResponse, any[]>('data'),
      mergeMap(data => data),
      this.transducer,
      this.reducer,
      tap(entities => this.store.selectFeature<T>(this.type).next(entities)),
    );
  }

  public flushCache(): void {
    this.store.selectFeature<T>(this.type).next(null);
  }

  public allEntities$: (
    req$: Observable<HttpRequest>,
  ) => Observable<EntityState<T>> = req$ =>
    req$.pipe(
      withLatestFrom(this.store.selectFeature<T>(this.type)),
      switchMap(([, cache]) => (cache ? of(cache) : this.newRequest$())),
    );

  public entity$: (req$: Observable<HttpRequest>) => Observable<T> = req$ =>
    req$.pipe(
      withLatestFrom(this.store.selectFeature<T>(this.type)),
      switchMap(([req, cache]) => {
        const id = req.params.id;
        if (!cache || !cache.index[id]) {
          return this.newRequest$().pipe(
            map(freshCache => freshCache.dictionary[freshCache.index[id]]),
          );
        }

        return of(cache.dictionary[cache.index[id]]);
      }),
    );
}
