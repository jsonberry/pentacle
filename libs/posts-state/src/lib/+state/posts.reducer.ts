import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { PostDetailDTO, PostDTO, PostsState } from '@pentacle/models';
import { withLoadingToggle } from '@pentacle/utils';
import { PostsAction, PostsActionTypes } from './posts.actions';

export const POSTS_FEATURE_KEY = 'posts';

export const adapter: EntityAdapter<
  PostDTO | PostDetailDTO
> = createEntityAdapter<PostDTO | PostDetailDTO>();

export const initialState: PostsState = adapter.getInitialState({
  loading: false,
});

export function basePostsReducer(
  state: PostsState = initialState,
  action: PostsAction,
): PostsState {
  switch (action.type) {
    case PostsActionTypes.PostLoaded:
      return adapter.upsertOne(action.post, state);

    case PostsActionTypes.PostsLoaded:
      return adapter.addAll(action.posts, state);

    default:
      return state;
  }
}

export function postsReducer(state: PostsState, action: PostsAction) {
  return withLoadingToggle<PostsState, PostsAction>(basePostsReducer, [
    PostsActionTypes.LoadPosts,
    PostsActionTypes.ResourceDetailRouteLoadPost,
    PostsActionTypes.PostsLoaded,
    PostsActionTypes.PostLoaded,
    PostsActionTypes.PostsLoadError,
    PostsActionTypes.PostLoadError,
  ])(state, action);
}
