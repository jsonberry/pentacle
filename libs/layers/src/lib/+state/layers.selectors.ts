import { createSelector } from '@ngrx/store';
import { pagesQuery } from '@pentacle/pages-state';
import { routerQuery } from '@pentacle/router-state';

const getCurrentLayerPage = createSelector(
  pagesQuery.getPagesDictionary,
  routerQuery.getParams,
  (pages, params) =>
    params.id
      ? pages[params.id]
        ? pages[params.id]
        : null
      : pages['layers']
        ? pages['layers']
        : null,
);

export const layersQuery = {
  getCurrentLayerPage,
};
