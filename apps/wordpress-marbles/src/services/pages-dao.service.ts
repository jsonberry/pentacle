import { Inject, Injectable } from 'injection-js';
import { map, reduce } from 'rxjs/operators';
import { Page } from '../api';
import { EntitiesDao } from './entities-dao.service';
import { HttpService } from './http.service';
import { URL_BASE_TOKEN } from './injection-tokens';
import { StoreService } from './store.service';
import { EntityState } from '../common';

@Injectable()
export class PagesDao extends EntitiesDao<Page> {
  public readonly type = 'PAGES';
  public readonly endpoint = '/wp/v2/pages';
  public readonly reducer = reduce<Page, EntityState<Page>>(
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
        (page: any): Page => ({
          _wp_id: page.id,
          id: page.slug,
          title: page.title && page.title.rendered,
          date: {
            created: page.date,
            modified: page.modified
          },
          content: page.content && page.content.rendered,
          acf: page.acf
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
