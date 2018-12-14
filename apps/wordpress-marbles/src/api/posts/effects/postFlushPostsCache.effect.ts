import { Effect } from '@marblejs/core';
import { map, tap } from 'rxjs/operators';
import appServices from '../../../services';

export const postFlushPostsCacheEffect$: Effect = req$ =>
  req$.pipe(
    tap(_ => appServices.posts.flushCache()),
    map(_ => ({ body: 'Successfully cleared Posts cache' }))
  );
