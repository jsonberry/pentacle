import { Effect } from '@marblejs/core';
import { tap, map } from 'rxjs/operators';
import appServices from '../../../services';

export const postFlushTagsCacheEffect$: Effect = req$ =>
  req$.pipe(
    tap(_ => appServices.tags.flushCache()),
    map(_ => ({ body: 'Successfully cleared Tags cache' })),
  );
