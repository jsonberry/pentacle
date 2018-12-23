import { combineRoutes, EffectFactory } from '@marblejs/core';
import { getTagsEffect$, postFlushTagsCacheEffect$ } from './effects';

export const flushTagsCache$ = EffectFactory.matchPath('/flush')
  .matchType('POST')
  .use(postFlushTagsCacheEffect$);

export const getTags$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(getTagsEffect$);

export const tags$ = combineRoutes('/tags', {
  effects: [flushTagsCache$, getTags$],
});
