import { createSelector } from '@ngrx/store';
import { ResourcesFilterFormGroups } from '@pentacle/models';
import { postsQuery } from '@pentacle/posts-state';
import { routerQuery } from '@pentacle/router-state';
import { tagsQuery } from '@pentacle/tags-state';
import {
  getInitialOptions,
  getProjectedOptions,
  getSelectedOptions,
} from './resources.utils';

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

const getResourceByRoute = createSelector(
  postsQuery.getPostsDictionary,
  routerQuery.getParams,
  (resources, params) => (resources[params.id] ? resources[params.id] : null),
);

const getResourceFilterFormGroups = createSelector(
  routerQuery.getQueryParams,
  tagsQuery.getTagsDictionary,
  tagsQuery.getTagsArray,
  (queryParams, tags, tagsArray): ResourcesFilterFormGroups => {
    const availableFormats = [
      {
        id: 'read',
        title: 'Read',
      },
      { id: 'watch', title: 'Watch' },
      { id: 'listen', title: 'Listen' },
    ];

    return {
      availableFormats: availableFormats.reduce(
        (acc, cur) => ({ ...acc, [cur.id]: cur }),
        {},
      ),
      availableTopics: tags,
      groups: {
        formats: getProjectedOptions(
          getInitialOptions(availableFormats),
          getSelectedOptions(queryParams.formats),
        ),
        topics: getProjectedOptions(
          getInitialOptions(tagsArray),
          getSelectedOptions(queryParams.topics),
        ),
      },
    };
  },
);

export const resourcesQuery = {
  getResources,
  getResourceByRoute,
  getResourceFilterFormGroups,
};
