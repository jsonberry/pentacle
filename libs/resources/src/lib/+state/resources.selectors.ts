import { createSelector } from '@ngrx/store';
import { postsQuery } from '@pentacle/posts-state';
import { routerQuery } from '@pentacle/router-state';
import { postContentLoaded } from '@pentacle/utils';
import { difficultyTooltips } from './difficulty-tooltips';
import { isEmpty } from 'lodash';

const getResources = createSelector(
  postsQuery.getPostsArray,
  routerQuery.getQueryParams,
  (posts, queryParams) => {
    if (isEmpty(queryParams)) {
      return posts;
    }

    return posts.filter(
      post =>
        (!queryParams.formats || queryParams.formats.includes(post.format)) &&
        (!queryParams.topics ||
          post.tags.some(tag => queryParams.topics.includes(tag))) &&
        (!queryParams.difficulties ||
          queryParams.difficulties.includes(post.difficulty)) &&
        (!queryParams.bestOf || post.bestOf),
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
