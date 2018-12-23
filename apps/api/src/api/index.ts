import { combineRoutes, EffectFactory } from '@marblejs/core';
import { notFoundEffect$ } from '../common';
import { pages$ } from './pages';
import { posts$ } from './posts';
import { users$ } from './users';
import { categories$ } from './categories';
import { assets$ } from './assets';
import { tags$ } from './tags';
export * from './categories';
export * from './pages';
export * from './posts';
export * from './users';
export * from './assets';
export * from './tags';

export const notFound$ = EffectFactory.matchPath('*')
  .matchType('*')
  .use(notFoundEffect$);

export const api$ = combineRoutes('/v1', [
  pages$,
  posts$,
  users$,
  categories$,
  assets$,
  tags$,
  notFound$,
]);
