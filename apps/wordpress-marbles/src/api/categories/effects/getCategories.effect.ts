import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getCategoriesEffect$: Effect = req$ =>
  req$.pipe(
    appServices.categories.allEntities$,
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('No Categories found', HttpStatus.NOT_FOUND))
    )
  );
