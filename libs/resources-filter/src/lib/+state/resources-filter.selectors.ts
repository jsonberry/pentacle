import { createSelector } from '@ngrx/store';
import { routerQuery } from '@pentacle/router-state';
import { tagsQuery } from '@pentacle/tags-state';
import {
  ResourcesFilterFormGroups,
  PostFormat,
  PostDifficulty,
} from '@pentacle/models';
import {
  getProjectedOptions,
  getInitialOptions,
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
  (queryParams, availableTopics, tagsArray): ResourcesFilterFormGroups => {
    const availableFormats = [
      {
        id: 'read',
        title: 'Read',
      },
      { id: 'watch', title: 'Watch' },
      { id: 'listen', title: 'Listen' },
    ];

    const availableDifficulties: {
      id: PostDifficulty;
      title: string;
      rank: number;
    }[] = [
      {
        id: 'introductory',
        title: 'Introductory',
        rank: 0,
      },
      {
        id: 'beginner',
        title: 'Beginner',
        rank: 1,
      },
      {
        id: 'intermediate',
        title: 'Intermediate',
        rank: 2,
      },
      {
        id: 'advanced',
        title: 'Advanced',
        rank: 3,
      },
    ];

    const availableBestOf = [{ id: 'bestOf', title: 'Best Of' }];

    return {
      availableTopics,
      availableBestOf: mapFilterFormListToDictionary(availableBestOf),
      availableFormats: mapFilterFormListToDictionary(availableFormats),
      availableDifficulties: mapFilterFormListToDictionary(
        availableDifficulties,
      ),
      groups: {
        formats: getProjectedOptions<PostFormat>(
          getInitialOptions(availableFormats),
          getSelectedOptions(queryParams.formats),
        ),
        topics: getProjectedOptions(
          getInitialOptions(tagsArray),
          getSelectedOptions(queryParams.topics),
        ),
        difficulties: getProjectedOptions<PostDifficulty>(
          getInitialOptions(availableDifficulties),
          getSelectedOptions(queryParams.difficulties),
        ),
        bestOf: getProjectedOptions(
          getInitialOptions(availableBestOf),
          getSelectedOptions(queryParams.bestOf),
        ),
      },
    };
  },
);

export const resourcesFilterQuery = {
  getResourceFilterFormGroups,
  getShowResourcesFilter,
};
