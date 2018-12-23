import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@pentacle/models';
import { ROUTER_FEATURE_KEY } from './router.reducers';

const getRouterState = createFeatureSelector<RouterState>(ROUTER_FEATURE_KEY);

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
  getRouterState,
  getUrl,
  getParams,
  getQueryParams,
};
