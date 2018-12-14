import { combineRoutes, EffectFactory } from '@marblejs/core';
import { notFoundEffect$ } from '../common';
import { pages$ } from './pages';
import { posts$ } from './posts';
import { users$ } from './users';
import { categories$ } from './categories';
import { assets$ } from './assets';
export * from './categories';
export * from './pages';
export * from './posts';
export * from './users';
export * from './assets';

export const notFound$ = EffectFactory.matchPath('*')
  .matchType('*')
  .use(notFoundEffect$);

export const api$ = combineRoutes('/api/v1', [
  pages$,
  posts$,
  users$,
  categories$,
  assets$,
  notFound$
]);
