import { TagsAction, TagsActionTypes } from './tags.actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TagDTO, TagsState } from '@pentacle/models';
import { withLoadingToggle } from '@pentacle/utils';

export const TAGS_FEATURE_KEY = 'tags';

export const adapter: EntityAdapter<TagDTO> = createEntityAdapter<TagDTO>();

export const initialState: TagsState = adapter.getInitialState({
  loading: false,
});

export function baseTagsReducer(
  state = initialState,
  action: TagsAction,
): TagsState {
  switch (action.type) {
    case TagsActionTypes.TagsLoaded:
      return adapter.addAll(action.tags, state);

    default:
      return state;
  }
}

export function tagsReducer(
  state = initialState,
  action: TagsAction,
): TagsState {
  return withLoadingToggle<TagsState, TagsAction>(baseTagsReducer, [
    TagsActionTypes.ResourcesPageLoadTags,
    TagsActionTypes.TagsLoaded,
    TagsActionTypes.TagsLoadError,
  ])(state, action);
}
