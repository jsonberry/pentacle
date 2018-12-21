import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Post, PostsState } from '@pentacle/models';
import { PostsAction, PostsActionTypes } from './posts.actions';

export const POSTS_FEATURE_KEY = 'posts';
export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>();
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
