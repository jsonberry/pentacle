import { Tag } from '@pentacle/models';
import { Inject, Injectable } from 'injection-js';
import { map, reduce } from 'rxjs/operators';
import { EntityState } from '../common';
import { EntitiesDao } from './entities-dao.service';
import { HttpService } from './http.service';
import { URL_BASE_TOKEN } from './injection-tokens';
import { StoreService } from './store.service';

@Injectable()
export class TagsDao extends EntitiesDao<Tag> {
  public readonly type = 'TAGS';
  public readonly endpoint = '/wp/v2/tags';
  public readonly reducer = reduce<Tag, EntityState<Tag>>(
    (acc, val) => ({
      dictionary: {
        ...acc.dictionary,
        [val._wp_id]: val,
      },
      index: {
        ...acc.index,
        [val.id]: val._wp_id,
      },
      set: [...acc.set, val],
    }),
    { dictionary: {}, index: {}, set: [] },
  );
  public readonly transducer = stream$ =>
    stream$.pipe(
      map(
        (tag: any): Tag => ({
          _wp_id: tag && tag.id,
          id: tag && tag.slug,
          title: tag && tag.name,
          count: tag && tag.count,
          description: tag && tag.description,
        }),
      ),
    );

  constructor(
    http: HttpService,
    store: StoreService,
    @Inject(URL_BASE_TOKEN) urlBase,
  ) {
    super(http, store, urlBase);
  }
}
