import { createSelector } from '@ngrx/store';
import { pagesQuery } from '@pentacle/pages-state';
import { postsQuery } from '@pentacle/posts-state';

const getShowLoadingProgress = createSelector(
  pagesQuery.getLoading,
  postsQuery.getLoading,
  (pagesLoading, postsLoading) => pagesLoading || postsLoading,
);

export const pagesLoadingProgressQuery = {
  getShowLoadingProgress,
};
