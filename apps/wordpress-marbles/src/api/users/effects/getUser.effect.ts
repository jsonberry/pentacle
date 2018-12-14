import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError, withLatestFrom, map } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getUserEffect$: Effect = req$ =>
  req$.pipe(
    appServices.users.entity$,
    withLatestFrom(appServices.store.POSTS),
    map(([user, _posts]) => ({
      ...user,
      posts: _posts && _posts.set.filter(post => post.author_id === user._wp_id).map(post => post.id),
    })),
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('User not found', HttpStatus.NOT_FOUND))
    )
  );
