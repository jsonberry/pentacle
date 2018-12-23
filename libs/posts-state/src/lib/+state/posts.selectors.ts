import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { PostDetailDTO, PostDTO, PostsState } from '@pentacle/models';
import { adapter, POSTS_FEATURE_KEY } from './posts.reducer';

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

const getPostsState = createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

const getPostIds = createSelector(getPostsState, selectIds);

const getPostsArray = createSelector(getPostsState, selectAll);

const getPostsDictionary = createSelector(getPostsState, selectEntities);

const getPostsLoaded = createSelector(getPostsState, ({ loaded }) => loaded);

const getPost = (
  id: string,
): MemoizedSelector<object, PostDetailDTO | PostDTO> =>
  createSelector(getPostsDictionary, posts => posts[id]);

export const postsQuery = {
  getPostsState,
  getPostIds,
  getPostsArray,
  getPostsDictionary,
  getPostsLoaded,
  getPost,
};

export function isPostDetailDTO(
  post: PostDetailDTO | PostDTO,
): post is PostDetailDTO {
  return !!(<PostDetailDTO>post).content;
}
