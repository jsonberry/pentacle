import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getAssetsEffect$: Effect = req$ =>
  req$.pipe(
    appServices.assets.allEntities$,
    bodyResTransducer,
    catchError((err) => {
      console.log(err);
      return throwError(new HttpError('No Assets found', HttpStatus.NOT_FOUND));
    }
    )
  );
