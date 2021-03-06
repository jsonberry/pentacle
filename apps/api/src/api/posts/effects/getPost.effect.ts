import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { PostCategory, PostDetailDTO } from '@pentacle/models';
import { throwError } from 'rxjs';
import { catchError, map, withLatestFrom } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getPostEffect$: Effect = req$ =>
  req$.pipe(
    appServices.posts.entity$,
    withLatestFrom(
      appServices.store.USERS,
      appServices.store.CATEGORIES,
      appServices.store.ASSETS,
      appServices.store.TAGS,
    ),
    map(
      ([post, users, categories, assets, tags]): PostDetailDTO => {
        const author = users && users.dictionary[post.author_id];
        return {
          id: post && post.id,
          title: post && post.title,
          date: post && post.date,
          format: post.format,
          source: post.source,
          image:
            assets &&
            assets.dictionary &&
            assets.dictionary[post.featured_media_id],
          author: {
            name: author && author.name,
            id: author && author.id,
          },
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
          tags:
            post &&
            post.tags &&
            post.tags.map(
              tagId =>
                tags &&
                tags.dictionary &&
                tags.dictionary[tagId] &&
                tags.dictionary[tagId].id,
            ),
          difficulty: post.difficulty,
          bestOf: post.bestOf,
          cost: post.cost,
          content: post && post.content,
          excerpt: post && post.excerpt,
        };
      },
    ),
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('Post not found', HttpStatus.NOT_FOUND)),
    ),
  );
