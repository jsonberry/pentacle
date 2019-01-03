import { createSelector } from '@ngrx/store';
import { postsQuery } from '@pentacle/posts-state';
import { routerQuery } from '@pentacle/router-state';

const getResources = createSelector(
  postsQuery.getPostsArray,
  routerQuery.getQueryParams,
  (posts, queryParams) => {
    if (!queryParams.formats && !queryParams.topics) {
      return posts;
    }

    return posts.filter(
      post =>
        (!queryParams.formats || queryParams.formats.includes(post.format)) &&
        (!queryParams.topics ||
          post.tags.some(tag => queryParams.topics.includes(tag))),
    );
  },
);

const getFilteredResourcesCount = createSelector(
  getResources,
  resources => resources.length,
);

const getResourceByRoute = createSelector(
  postsQuery.getPostsDictionary,
  routerQuery.getParams,
  (resources, params) => resources[params.id],
);

const getSourceByRoute = createSelector(
  getResourceByRoute,
  resource => (resource ? resource.source : null),
);

export const resourcesQuery = {
  getResourceByRoute,
  getFilteredResourcesCount,
  getResources,
  getSourceByRoute,
};
