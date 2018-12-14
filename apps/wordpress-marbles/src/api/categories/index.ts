import { combineRoutes, EffectFactory } from '@marblejs/core';
import {
  getCategoriesEffect$,
  getCategoryEffect$,
  postFlushCategoriesCacheEffect$
} from './effects';
export * from './categories.model';

export const flushCategoriesCache$ = EffectFactory.matchPath('/flush')
  .matchType('POST')
  .use(postFlushCategoriesCacheEffect$);

export const getCategory$ = EffectFactory.matchPath('/:id')
  .matchType('GET')
  .use(getCategoryEffect$);

export const getCategories$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(getCategoriesEffect$);

export const categories$ = combineRoutes('/categories', {
  effects: [flushCategoriesCache$, getCategory$, getCategories$]
});
