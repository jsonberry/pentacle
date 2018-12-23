import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { TagDetailDTO } from '@pentacle/models';
import { throwError } from 'rxjs';
import { catchError, map, withLatestFrom } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getTagEffect$: Effect = req$ =>
  req$.pipe(
    appServices.tags.entity$,
    withLatestFrom(appServices.store.POSTS),
    map(
      ([tag, posts]): TagDetailDTO => ({
        id: tag && tag.id,
        title: tag && tag.title,
        description: tag && tag.description,
        count: tag && typeof tag.count === 'number' ? tag.count : null,
        posts: posts.set
          .filter(post => post.tags.includes(tag._wp_id))
          .map(post => post.id),
      }),
    ),
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('Tag not found', HttpStatus.NOT_FOUND)),
    ),
  );
