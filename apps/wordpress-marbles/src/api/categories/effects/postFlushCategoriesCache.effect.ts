import { Effect } from '@marblejs/core';
import { tap, map } from 'rxjs/operators';
import appServices from '../../../services';

export const postFlushCategoriesCacheEffect$: Effect = req$ =>
  req$.pipe(
    tap(_ => appServices.categories.flushCache()),
    map(_ => ({body: 'Successfully cleared Categories cache'}))
  );
