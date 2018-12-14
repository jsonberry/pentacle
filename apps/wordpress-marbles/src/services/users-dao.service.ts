import { Inject, Injectable } from 'injection-js';
import { map, reduce } from 'rxjs/operators';
import { User } from '../api';
import { EntitiesDao } from './entities-dao.service';
import { HttpService } from './http.service';
import { URL_BASE_TOKEN } from './injection-tokens';
import { StoreService } from './store.service';
import { EntityState } from '../common';

@Injectable()
export class UsersDao extends EntitiesDao<User> {
  public readonly type = 'USERS';
  public readonly endpoint = '/wp/v2/users';
  public readonly reducer = reduce<User, EntityState<User>>(
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
        (user: any): User => ({
          _wp_id: user.id,
          id: user.name && (user.name as string).replace(' ', '-').toLowerCase(),
          name: user.name,
          description: user.description,
          acf: user.acf
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
