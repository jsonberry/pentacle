import { httpListener } from '@marblejs/core';
import { bodyParser$ } from '@marblejs/middleware-body';
import { loggerWithOpts$ } from '@marblejs/middleware-logger';
import { get } from 'lodash';
import 'reflect-metadata';
import { forkJoin, of } from 'rxjs';
import { catchError, filter, map, mergeMap, reduce, switchMapTo, tap } from 'rxjs/operators';
import { api$, Asset } from './api';
import { cors$, EntityState } from './common';
import appServices from './services';

const noopAssest: Asset = {
  _wp_id: 0,
  id: 'noop',
  post: 0,
  thumbnail: 'noop',
  medium: 'noop',
  medium_large: 'noop',
  large: 'noop',
  full: 'noop'
};

console.time('Duration');
of('Hydrating stores...')
  .pipe(
    tap(message => console.log(message)),
    switchMapTo(
      forkJoin(
        appServices.pages
          .newRequest$()
          .pipe(tap(() => console.log('Pages loaded...'))),
        appServices.posts.newRequest$().pipe(
          tap(() => console.log('Posts loaded...')),
          mergeMap(posts => posts.set),
          filter(post => post.featured_media_id !== 0),
          mergeMap(post => {
            console.log('Requesting Post Featured Image:', post.featured_media_id);
            return appServices.http
              .get(
                `${appServices.urlBase}/wp/v2/media/${post.featured_media_id}`
              )
              .pipe(
                map(({ data: asset }) => ({
                  _wp_id: asset.id,
                  id: asset.slug,
                  post: asset.post,
                  thumbnail: get(
                    asset,
                    'media_details.sizes.thumbnail.source_url'
                  ),
                  medium: get(asset, 'media_details.sizes.medium.source_url'),
                  medium_large: get(
                    asset,
                    'media_details.sizes.medium_large.source_url'
                  ),
                  large: get(asset, 'media_details.sizes.large.source_url'),
                  full: get(asset, 'media_details.sizes.full.source_url')
                })),
                catchError(err => {
                  console.log(
                    'Oops - there was an error, moving on!',
                    err.message
                  );
                  return of(noopAssest);
                })
              );
          }, 3),
          filter(asset => asset.id !== 'noop'),
          reduce<Asset, EntityState<Asset>>(
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
          ),
          tap(assets => appServices.store.ASSETS.next(assets)),
          tap(() => console.log('Posts Assets loaded...'))
        ),
        appServices.users
          .newRequest$()
          .pipe(tap(() => console.log('Users loaded...'))),
        appServices.categories
          .newRequest$()
          .pipe(tap(() => console.log('Categories loaded...')))
      )
    )
  )
  .subscribe({
    error(err) {
      console.log(err);
    },

    complete() {
      console.log('Hydration Complete');
      console.timeEnd('Duration');
    }
  });

const middlewares = [cors$, bodyParser$, loggerWithOpts$()];

const effects = [api$];

export const app = httpListener({ middlewares, effects });
