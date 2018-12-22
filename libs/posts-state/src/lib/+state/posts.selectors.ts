import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { PostsState, PostDTO, PostDetailDTO } from '@pentacle/models';
import { adapter, POSTS_FEATURE_KEY } from './posts.reducer';

export const getPostsState = createFeatureSelector<PostsState>(
  POSTS_FEATURE_KEY,
);

const { selectIds, selectEntities, selectAll } = adapter.getSelectors();

const getPostIds = createSelector(getPostsState, selectIds);
const getPostsArray = createSelector(getPostsState, selectAll);
const getPostsDictionary = createSelector(getPostsState, selectEntities);
const getPostsLoaded = createSelector(getPostsState, ({ loaded }) => loaded);
const getPost = (
  id: string,
): MemoizedSelector<object, PostDetailDTO | PostDTO> =>
  createSelector(getPostsDictionary, posts => posts[id]);

export const postsQuery = {
  getPost,
  getPostIds,
  getPostsArray,
  getPostsDictionary,
  getPostsLoaded,
};

export function isPostDetailDTO(
  post: PostDetailDTO | PostDTO,
): post is PostDetailDTO {
  return !!(<PostDetailDTO>post).content;
}
