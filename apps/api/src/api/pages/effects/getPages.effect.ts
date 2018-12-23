import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { PageDTO } from '@pentacle/models';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getPagesEffect$: Effect = req$ =>
  req$.pipe(
    appServices.pages.allEntities$,
    map(
      (pages): PageDTO[] =>
        pages.set.map(
          (page): PageDTO => ({
            id: page.id,
            title: page.title,
          }),
        ),
    ),
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('No pages found', HttpStatus.NOT_FOUND)),
    ),
  );
