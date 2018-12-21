import { createSelector } from '@ngrx/store';
import { postsQuery } from '@pentacle/posts-state';
import { routerQuery } from '@pentacle/router-state';

const getAllResources = createSelector(postsQuery.getPostsArray, posts =>
  posts.filter(post => post.categories.includes('resources')),
);
const getReadResources = createSelector(getAllResources, posts =>
  posts.filter(post => post.categories.includes('read')),
);
const getWatchResources = createSelector(getAllResources, posts =>
  posts.filter(post => post.categories.includes('watch')),
);
const getResourcesByRoute = createSelector(
  getAllResources,
  routerQuery.getUrl,
  (posts, url) => {
    switch (true) {
      case url.includes('read'):
        return posts.filter(post => post.categories.includes('read'));
      case url.includes('watch'):
        return posts.filter(post => post.categories.includes('watch'));
      case url.includes('listen'):
        return posts.filter(post => post.categories.includes('listen'));
      default:
        return posts;
    }
  },
);
const getResourceByRoute = createSelector(
  postsQuery.getPostsDictionary,
  routerQuery.getParams,
  (resources, params) => (resources[params.id] ? resources[params.id] : null),
);

export const resourcesQuery = {
  getAllResources,
  getReadResources,
  getWatchResources,
  getResourcesByRoute,
  getResourceByRoute,
};
