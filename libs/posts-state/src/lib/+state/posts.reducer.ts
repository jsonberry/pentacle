import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { PostsState, PostDTO, PostDetailDTO } from '@pentacle/models';
import { PostsAction, PostsActionTypes } from './posts.actions';

export const POSTS_FEATURE_KEY = 'posts';
export const adapter: EntityAdapter<
  PostDTO | PostDetailDTO
> = createEntityAdapter<PostDTO | PostDetailDTO>();
export const initialState: PostsState = adapter.getInitialState({
  loaded: false,
});

export function postsReducer(
  state: PostsState = initialState,
  action: PostsAction,
): PostsState {
  switch (action.type) {
    case PostsActionTypes.PostLoaded:
      return adapter.upsertOne(action.post, state);

    case PostsActionTypes.PostsLoaded:
      return {
        ...adapter.addAll(action.posts, state),
        loaded: true,
      };
  }
  return state;
}
