import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getPagesEffect$: Effect = req$ =>
  req$.pipe(
    appServices.pages.allEntities$,
    map(pages =>
      pages.set.map(page => ({
        id: page.id,
        title: page.title
      }))
    ),
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('No pages found', HttpStatus.NOT_FOUND))
    )
  );
