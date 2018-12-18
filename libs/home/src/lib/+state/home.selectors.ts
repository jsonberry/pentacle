import { createSelector } from '@ngrx/store';
import { pagesQuery } from '@pentacle/pages-state';

const getHomePageData = createSelector(
  pagesQuery.getPage('home'),
  page => page,
);

export const homeQuery = {
  getHomePageData,
};
