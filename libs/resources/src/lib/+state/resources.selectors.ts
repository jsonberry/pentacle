import { createSelector } from '@ngrx/store';
import { postsQuery } from '@pentacle/posts-state';
import { routerQuery } from '@pentacle/router-state';
import { postContentLoaded } from '@pentacle/utils';

const getResources = createSelector(
  postsQuery.getPostsArray,
  routerQuery.getQueryParams,
  (posts, queryParams) => {
    if (
      !queryParams.formats &&
      !queryParams.topics &&
      !queryParams.difficulties
    ) {
      return posts;
    }

    return posts.filter(
      post =>
        (!queryParams.formats || queryParams.formats.includes(post.format)) &&
        (!queryParams.topics ||
          post.tags.some(tag => queryParams.topics.includes(tag))) &&
        (!queryParams.difficulties ||
          queryParams.difficulties.includes(post.difficulty)),
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
      return post;
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
