import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { PageDetailDTO } from '@pentacle/models';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

export const getPageEffect$: Effect = req$ =>
  req$.pipe(
    appServices.pages.entity$,
    map(
      ({ id, title, content }): PageDetailDTO => ({
        id,
        title,
        content,
      }),
    ),
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('Page not found', HttpStatus.NOT_FOUND)),
    ),
  );
