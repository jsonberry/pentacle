import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TAGS_FEATURE_KEY, adapter } from './tags.reducer';
import { TagsState } from '@pentacle/models';
import { tagsLoaded } from '@pentacle/utils';

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

const getTagsState = createFeatureSelector<TagsState>(TAGS_FEATURE_KEY);

const getTagIds = createSelector(getTagsState, selectIds);

const getTagsArray = createSelector(getTagsState, selectAll);

const getTagsDictionary = createSelector(getTagsState, selectEntities);

const getTagsLoaded = createSelector(getTagsDictionary, tags =>
  tagsLoaded(tags),
);

export const tagsQuery = {
  getTagsState,
  getTagIds,
  getTagsArray,
  getTagsDictionary,
  getTagsLoaded,
};
