import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TAGS_FEATURE_KEY, adapter } from './tags.reducer';
import { TagsState } from '@pentacle/models';

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

const getTagsState = createFeatureSelector<TagsState>(TAGS_FEATURE_KEY);

const getTagIds = createSelector(getTagsState, selectIds);

const getTagsArray = createSelector(getTagsState, selectAll);

const getTagsDictionary = createSelector(getTagsState, selectEntities);

const getTagsLoaded = createSelector(getTagsState, ({ loaded }) => loaded);

export const tagsQuery = {
  getTagsState,
  getTagIds,
  getTagsArray,
  getTagsDictionary,
  getTagsLoaded,
};
