import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { PostsState, PostDTO, PostDetailDTO } from '@pentacle/models';
import { adapter, POSTS_FEATURE_KEY } from './posts.reducer';

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

const getPostsState = createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

const getPostIds = createSelector(getPostsState, selectIds);

const getPostsArray = createSelector(getPostsState, selectAll);

const getPostsDictionary = createSelector(getPostsState, selectEntities);

const getPost = (
  id: string,
): MemoizedSelector<object, PostDTO | PostDetailDTO> =>
  createSelector(getPostsDictionary, posts => posts[id]);

const getLoading = createSelector(getPostsState, ({ loading }) => loading);

export const postsQuery = {
  getLoading,
  getPost,
  getPostIds,
  getPostsArray,
  getPostsDictionary,
  getPostsState,
};
