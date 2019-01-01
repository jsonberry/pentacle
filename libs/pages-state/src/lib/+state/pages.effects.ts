import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { State } from '@pentacle/models';
import { fromRouterActions } from '@pentacle/router-state';
import { PagesDataService } from '@pentacle/services';
import { of, timer } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mapTo,
  switchMap,
  switchMapTo,
  takeUntil,
} from 'rxjs/operators';
import {
  fromPagesActions,
  LoadPage,
  PageLoadError,
  PagesActionTypes,
} from './pages.actions';
import { pagesQuery } from './pages.selectors';

@Injectable()
export class PagesEffects {
  @Effect()
  pageNotFound$ = this.actions$.pipe(
    ofType<PageLoadError>(PagesActionTypes.PageLoadError),
    mapTo(new fromRouterActions.Go({ path: ['/404'] })),
  );

  @Effect()
  loadPage$ = this.actions$.pipe(
    ofType<LoadPage>(PagesActionTypes.LoadPage),
    switchMap(({ pageId }) =>
      this.pagesDataService.getPage(pageId).pipe(
        map(page => new fromPagesActions.PageLoaded(page)),
        catchError(error => of(new fromPagesActions.PageLoadError(error))),
      ),
    ),
  );

  @Effect()
  showLoadingProgress$ = this.actions$.pipe(
    ofType<LoadPage>(PagesActionTypes.LoadPage),
    switchMap(({ pageId }) =>
      this.store.pipe(select(pagesQuery.getPage(pageId))),
    ),
    filter(page => !page),
    switchMapTo(
      timer(1000).pipe(
        mapTo(new fromPagesActions.ShowLoadingProgress()),
        takeUntil(
          this.actions$.pipe(
            ofType(PagesActionTypes.PageLoaded, PagesActionTypes.PageLoadError),
          ),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private pagesDataService: PagesDataService,
  ) {}
}
