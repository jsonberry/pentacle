import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from './router.reducer';

const getRouterState = createFeatureSelector<RouterState>('router');

const getUrl = createSelector(
  getRouterState,
  (router: RouterState) =>
    (router && router.state && router.state && router.state.url) || null,
);

const getParams = createSelector(
  getRouterState,
  (router: RouterState) =>
    (router && router.state && router.state && router.state.params) || null,
);

const getQueryParams = createSelector(
  getRouterState,
  (router: RouterState) =>
    (router && router.state && router.state && router.state.queryParams) ||
    null,
);

export const routerQuery = {
  getUrl,
  getParams,
  getQueryParams,
};
