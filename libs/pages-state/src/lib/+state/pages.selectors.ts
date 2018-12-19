import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PagesState } from '@pentacle/models';
import { adapter, PAGES_FEATURE_KEY } from './pages.reducer';

export const getPagesState = createFeatureSelector<PagesState>(
  PAGES_FEATURE_KEY,
);

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();
const getPageIds = createSelector(getPagesState, selectIds);
const getPagesDictionary = createSelector(getPagesState, selectEntities);
const getPagesArray = createSelector(getPagesState, selectAll);
const getPage = (id: string) =>
  createSelector(getPagesDictionary, pages => {
    if (pages[id]) {
      return pages[id];
    }

    return null;
  });

export const pagesQuery = {
  getPageIds,
  getPagesDictionary,
  getPagesArray,
  getPage,
};
