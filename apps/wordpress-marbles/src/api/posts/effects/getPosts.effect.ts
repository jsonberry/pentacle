import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError, map, withLatestFrom } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getPostsEffect$: Effect = req$ =>
  req$.pipe(
    appServices.posts.allEntities$,
    withLatestFrom(appServices.store.ASSETS),
    map(([posts, assets]) => {
      return posts.set.map(post => ({
        id: post.id,
        date: post.date && post.date && post.date.created,
        title: post.title,
        image:
          assets &&
          assets.dictionary[post.featured_media_id] &&
          assets.dictionary[post.featured_media_id].thumbnail
      }));
    }),
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('No posts found', HttpStatus.NOT_FOUND))
    )
  );
