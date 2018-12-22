import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { PostCategory, PostDTO } from '@pentacle/models';
import { throwError } from 'rxjs';
import { catchError, map, withLatestFrom } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getPostsEffect$: Effect = req$ =>
  req$.pipe(
    appServices.posts.allEntities$,
    withLatestFrom(appServices.store.ASSETS, appServices.store.CATEGORIES),
    map(
      ([posts, assets, categories]): PostDTO[] => {
        return posts.set.map(post => ({
          id: post && post.id,
          date: post && post.date,
          title: post && post.title,
          categories:
            post &&
            post.categories &&
            post.categories
              .map(
                catId =>
                  (categories &&
                    categories.dictionary &&
                    categories.dictionary[catId] &&
                    categories.dictionary[catId].id) as PostCategory,
              )
              .filter(Boolean),
          image:
            assets &&
            assets.dictionary &&
            assets.dictionary[post.featured_media_id],
        }));
      },
    ),
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('No posts found', HttpStatus.NOT_FOUND)),
    ),
  );
