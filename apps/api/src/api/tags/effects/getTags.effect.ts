import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { TagDTO } from '@pentacle/models';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getTagsEffect$: Effect = req$ =>
  req$.pipe(
    appServices.tags.allEntities$,
    map(
      (tags): TagDTO[] =>
        tags.set.map(
          ({ title, id }): TagDTO => ({
            id,
            title,
          }),
        ),
    ),
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('No Tags found', HttpStatus.NOT_FOUND)),
    ),
  );
