import { createSelector } from '@ngrx/store';
import { postsQuery } from '@pentacle/posts-state';
import { routerQuery } from '@pentacle/router-state';
import { postContentLoaded } from '@pentacle/utils';
import { isEmpty } from 'lodash';
import {
  difficultyTooltips,
  filterByBestOf,
  filterByDifficulties,
  filterByFormats,
  filterByTopics,
  filterByCost,
} from './resources.utils';

const getResources = createSelector(
  postsQuery.getPostsArray,
  routerQuery.getQueryParams,
  (posts, queryParams) => {
    if (isEmpty(queryParams)) {
      return posts;
    }

    return posts.filter(
      post =>
        filterByFormats(queryParams.formats, post.format) &&
        filterByTopics(
          queryParams.topics,
          post.tags,
          queryParams.topicsOperator,
        ) &&
        filterByDifficulties(queryParams.difficulties, post.difficulty) &&
        filterByBestOf(queryParams.bestOf, post.bestOf) &&
        filterByCost(queryParams.costs, post.cost),
    );
  },
);

const getFilteredResourcesCount = createSelector(
  getResources,
  resources => resources.length,
);

const getResouceDetailsByRoute = createSelector(
  postsQuery.getPostsDictionary,
  routerQuery.getParams,
  (resources, params) => {
    const post = resources[params.id];
    if (postContentLoaded(post)) {
      return {
        ...post,
        difficultyTooltip: difficultyTooltips[post.difficulty],
      };
    }
  },
);

const getSourceByRoute = createSelector(
  getResouceDetailsByRoute,
  resource => resource && resource.source,
);

export const resourcesQuery = {
  getResouceDetailsByRoute,
  getFilteredResourcesCount,
  getResources,
  getSourceByRoute,
};
