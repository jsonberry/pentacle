import { Inject, Injectable } from 'injection-js';
import { map, reduce } from 'rxjs/operators';
import { EntitiesDao } from './entities-dao.service';
import { HttpService } from './http.service';
import { URL_BASE_TOKEN } from './injection-tokens';
import { StoreService } from './store.service';
import { Category } from '../api';
import { EntityState } from '../common';

@Injectable()
export class CategoriesDao extends EntitiesDao<Category> {
  public readonly type = 'CATEGORIES';
  public readonly endpoint = '/wp/v2/categories';
  public readonly reducer = reduce<Category, EntityState<Category>>(
    (acc, val) => ({
      dictionary: {
        ...acc.dictionary,
        [val._wp_id]: val,
      },
      index: {
        ...acc.index,
        [val.id]: val._wp_id,
      },
      set: [
        ...acc.set,
        val,
      ]
    }),
    {dictionary: {}, index: {}, set: []}
  );
  public readonly transducer = stream$ =>
    stream$.pipe(
      map(
        (category: any): Category => ({
          _wp_id: category.id,
          id: category.slug,
          name: category.name,
          acf: category.acf,
        })
      )
    )

  constructor(
    http: HttpService,
    store: StoreService,
    @Inject(URL_BASE_TOKEN) urlBase
  ) {
    super(http, store, urlBase);
  }
}
