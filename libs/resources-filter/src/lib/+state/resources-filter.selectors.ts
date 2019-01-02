import { createSelector } from '@ngrx/store';
import { routerQuery } from '@pentacle/router-state';
import { tagsQuery } from '@pentacle/tags-state';
import { ResourcesFilterFormGroups } from '@pentacle/models';
import {
  getProjectedOptions,
  getInitialOptions,
  getSelectedOptions,
} from './resources-filter.utils';

const getShowResourcesFilter = createSelector(
  routerQuery.getUrl,
  routerQuery.getParams,
  (url, params) => url.includes('resources') && !Object.keys(params).length,
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

export const resourcesFilterQuery = {
  getResourceFilterFormGroups,
  getShowResourcesFilter,
};
