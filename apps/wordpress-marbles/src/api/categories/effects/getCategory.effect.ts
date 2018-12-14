import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getCategoryEffect$: Effect = req$ =>
  req$.pipe(
    appServices.categories.entity$,
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('Category not found', HttpStatus.NOT_FOUND))
    )
  );
