import { Inject, Injectable } from 'injection-js';
import { map, reduce, filter } from 'rxjs/operators';
import { EntitiesDao } from './entities-dao.service';
import { HttpService } from './http.service';
import { URL_BASE_TOKEN } from './injection-tokens';
import { StoreService } from './store.service';
import { Asset } from '../api';
import { EntityState } from '../common';
import { get } from 'lodash';

@Injectable()
export class AssetsDao extends EntitiesDao<Asset> {
  public readonly type = 'ASSETS';
  public readonly endpoint = '/wp/v2/media';
  public readonly reducer = reduce<Asset, EntityState<Asset>>(
    (acc, val) => ({
      dictionary: {
        ...acc.dictionary,
        [val._wp_id]: val
      },
      index: {
        ...acc.index,
        [val.id]: val._wp_id
      },
      set: [...acc.set, val]
    }),
    { dictionary: {}, index: {}, set: [] }
  );
  public readonly transducer = stream$ =>
    stream$.pipe(
      filter((asset: any) => {
        return !!(
          asset &&
          asset.post &&
          asset.media_details &&
          asset.media_details.sizes
        );
      }),
      map(
        (asset: any): Asset => ({
          _wp_id: asset.id,
          id: asset.slug,
          post: asset.post,
          thumbnail: get(asset, 'media_details.sizes.thumbnail.source_url'),
          medium: get(asset, 'media_details.sizes.medium.source_url'),
          medium_large: get(
            asset,
            'media_details.sizes.medium_large.source_url'
          ),
          large: get(asset, 'media_details.sizes.large.source_url'),
          full: get(asset, 'media_details.sizes.full.source_url')
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
