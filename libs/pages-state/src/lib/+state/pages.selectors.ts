import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PagesState } from '@pentacle/models';
import { routerQuery } from '@pentacle/router-state';
import { adapter, PAGES_FEATURE_KEY } from './pages.reducer';

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

const getPagesState = createFeatureSelector<PagesState>(PAGES_FEATURE_KEY);
const getPageIds = createSelector(getPagesState, selectIds);
const getPagesDictionary = createSelector(getPagesState, selectEntities);
const getPagesArray = createSelector(getPagesState, selectAll);
const getPage = (id: string) =>
  createSelector(getPagesDictionary, pages => pages[id]);
const getPageByRouteParamId = createSelector(
  getPagesDictionary,
  routerQuery.getParams,
  (pages, params) => pages[params.id],
);

export const pagesQuery = {
  getPage,
  getPageIds,
  getPagesArray,
  getPagesDictionary,
  getPagesState,
  getPageByRouteParamId,
};
