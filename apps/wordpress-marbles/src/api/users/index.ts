import { combineRoutes, EffectFactory } from '@marblejs/core';
import {
  postFlushUsersCacheEffect$,
  getUserEffect$,
  getUsersEffect$
} from './effects';
export * from './users.model';

export const flushUsersCache$ = EffectFactory.matchPath('/flush')
  .matchType('POST')
  .use(postFlushUsersCacheEffect$);

export const getUser$ = EffectFactory.matchPath('/:id')
  .matchType('GET')
  .use(getUserEffect$);

export const getUsers$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(getUsersEffect$);

export const users$ = combineRoutes('/users', {
  effects: [flushUsersCache$, getUser$, getUsers$]
});
