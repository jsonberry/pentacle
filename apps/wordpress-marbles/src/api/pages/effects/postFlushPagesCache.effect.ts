import { Effect } from '@marblejs/core';
import { tap, map } from 'rxjs/operators';
import appServices from '../../../services';

export const postFlushPagesCacheEffect$: Effect = req$ =>
  req$.pipe(
    tap(_ => appServices.pages.flushCache()),
    map(_ => ({body: 'Successfully cleared Pages cache'}))
  );
