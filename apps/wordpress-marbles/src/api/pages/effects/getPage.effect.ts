import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getPageEffect$: Effect = req$ =>
  req$.pipe(
    appServices.pages.entity$,
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('Page not found', HttpStatus.NOT_FOUND))
    )
  );
