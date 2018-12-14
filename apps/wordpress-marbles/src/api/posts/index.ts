import { combineRoutes, EffectFactory } from '@marblejs/core';
import {
  getPostEffect$,
  getPostsEffect$,
  postFlushPostsCacheEffect$
} from './effects';
export * from './posts.model';

export const flushPostsCache$ = EffectFactory.matchPath('/flush')
  .matchType('POST')
  .use(postFlushPostsCacheEffect$);

export const getPost$ = EffectFactory.matchPath('/:id')
  .matchType('GET')
  .use(getPostEffect$);

export const getPosts$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(getPostsEffect$);

export const posts$ = combineRoutes('/posts', {
  effects: [flushPostsCache$, getPost$, getPosts$]
});
