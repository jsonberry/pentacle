import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PAGES_FEATURE_KEY, PagesState } from './pages.reducer';
import { adapter } from './pages.reducer';

export const { selectIds, selectEntities, selectAll } = adapter.getSelectors();
export const getPagesState = createFeatureSelector<PagesState>(
  PAGES_FEATURE_KEY,
);
export const getPageIds = createSelector(getPagesState, selectIds);
export const getPagesDictionary = createSelector(getPagesState, selectEntities);
export const getPagesArray = createSelector(getPagesState, selectAll);
export const getPage = (id: string) =>
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
