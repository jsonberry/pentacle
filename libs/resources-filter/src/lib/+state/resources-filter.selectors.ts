import { createSelector } from '@ngrx/store';
import {
  PostDifficulty,
  PostFormat,
  ResourcesFilterFormGroups,
} from '@pentacle/models';
import { routerQuery } from '@pentacle/router-state';
import { tagsQuery } from '@pentacle/tags-state';
import {
  availableBestOf,
  availableDifficulties,
  availableFormats,
  availableCosts,
  getInitialOptions,
  getProjectedOptions,
  getSelectedOptions,
  mapFilterFormListToDictionary,
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
  (queryParams, availableTopics, tagsArray): ResourcesFilterFormGroups => ({
    availableBestOf: mapFilterFormListToDictionary(availableBestOf),
    availableCosts: mapFilterFormListToDictionary(availableCosts),
    availableDifficulties: mapFilterFormListToDictionary(availableDifficulties),
    availableFormats: mapFilterFormListToDictionary(availableFormats),
    availableTopics,
    groups: {
      bestOf: getProjectedOptions(
        getInitialOptions(availableBestOf),
        getSelectedOptions(queryParams.bestOf ? 'bestOf' : null),
      ),
      costs: getProjectedOptions(
        getInitialOptions(availableCosts),
        getSelectedOptions(queryParams.costs),
      ),
      difficulties: getProjectedOptions<PostDifficulty>(
        getInitialOptions(availableDifficulties),
        getSelectedOptions(queryParams.difficulties),
      ),
      formats: getProjectedOptions<PostFormat>(
        getInitialOptions(availableFormats),
        getSelectedOptions(queryParams.formats),
      ),
      topics: getProjectedOptions(
        getInitialOptions(tagsArray),
        getSelectedOptions(queryParams.topics),
      ),
      topicsOperator: queryParams.topicsOperator || 'exclusive',
    },
  }),
);

export const resourcesFilterQuery = {
  getResourceFilterFormGroups,
  getShowResourcesFilter,
};
