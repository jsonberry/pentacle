import { TagsAction, TagsActionTypes } from './tags.actions';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TagDTO, TagsState } from '@pentacle/models';

export const TAGS_FEATURE_KEY = 'tags';
export const adapter: EntityAdapter<TagDTO> = createEntityAdapter<TagDTO>();
export const initialState: TagsState = adapter.getInitialState({
  loaded: false,
});

export function tagsReducer(
  state = initialState,
  action: TagsAction,
): TagsState {
  switch (action.type) {
    case TagsActionTypes.TagsLoaded:
      return {
        ...adapter.addAll(action.tags, state),
        loaded: true,
      };

    default:
      return state;
  }
}
