import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from '@pentacle/models';
import { adapter, POSTS_FEATURE_KEY } from './posts.reducer';

export const getPostsState = createFeatureSelector<PostsState>(
  POSTS_FEATURE_KEY,
);

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

const getPostIds = createSelector(getPostsState, selectIds);
const getPostsArray = createSelector(getPostsState, selectAll);
const getPostsDictionary = createSelector(getPostsState, selectEntities);
const getPostsLoaded = createSelector(getPostsState, ({ loaded }) => loaded);
const getPost = (id: string) =>
  createSelector(getPostsDictionary, posts => {
    if (posts[id]) {
      return posts[id];
    }

    return null;
  });

export const postsQuery = {
  getPost,
  getPostIds,
  getPostsArray,
  getPostsDictionary,
  getPostsLoaded,
};
