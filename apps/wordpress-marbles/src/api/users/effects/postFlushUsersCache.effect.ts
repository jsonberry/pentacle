import { Effect } from '@marblejs/core';
import { tap, map } from 'rxjs/operators';
import appServices from '../../../services';

export const postFlushUsersCacheEffect$: Effect = req$ =>
  req$.pipe(
    tap(_ => appServices.users.flushCache()),
    map(_ => ({body: 'Successfully cleared Users cache'}))
  );
