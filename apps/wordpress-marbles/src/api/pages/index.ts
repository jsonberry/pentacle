import { combineRoutes, EffectFactory } from '@marblejs/core';
import {
  postFlushPagesCacheEffect$,
  getPagesEffect$,
  getPageEffect$,
} from './effects';
export * from './pages.model';

export const flushPagesCache$ = EffectFactory.matchPath('/flush') // consider moving this to a rehydrate endpoint
  .matchType('POST')
  .use(postFlushPagesCacheEffect$);

export const getPage$ = EffectFactory.matchPath('/:id')
  .matchType('GET')
  .use(getPageEffect$);

export const getPages$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(getPagesEffect$);

export const pages$ = combineRoutes('/pages', {
  effects: [flushPagesCache$, getPage$, getPages$]
});
