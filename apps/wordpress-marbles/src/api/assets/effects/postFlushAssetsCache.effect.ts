import { Effect } from '@marblejs/core';
import { tap, map } from 'rxjs/operators';
import appServices from '../../../services';

export const postFlushAssetsCacheEffect$: Effect = req$ =>
  req$.pipe(
    tap(_ => appServices.assets.flushCache()),
    map(_ => ({body: 'Successfully cleared Assets cache'}))
  );
