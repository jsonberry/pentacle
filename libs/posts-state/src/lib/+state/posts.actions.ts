import { Action } from '@ngrx/store';
import { PostDetailDTO, PostDTO } from '@pentacle/models';

export enum PostsActionTypes {
  LoadPost = '[Posts] Load Post',
  PostLoaded = '[Posts] Post Loaded',
  PostLoadError = '[Posts] Post Load Error',
  LoadPosts = '[Posts] Load Posts',
  PostsLoaded = '[Posts] Posts Loaded',
  PostsLoadError = '[Posts] Posts Load Error',
}

export class LoadPost implements Action {
  readonly type = PostsActionTypes.LoadPost;
}

export class PostLoadError implements Action {
  readonly type = PostsActionTypes.PostLoadError;
  constructor(public payload: any) {}
}

export class PostLoaded implements Action {
  readonly type = PostsActionTypes.PostLoaded;
  constructor(public post: PostDetailDTO) {}
}

export class LoadPosts implements Action {
  readonly type = PostsActionTypes.LoadPosts;
}

export class PostsLoadError implements Action {
  readonly type = PostsActionTypes.PostsLoadError;
  constructor(public payload: any) {}
}

export class PostsLoaded implements Action {
  readonly type = PostsActionTypes.PostsLoaded;
  constructor(public posts: PostDTO[]) {}
}

export type PostsAction =
  | LoadPosts
  | PostLoaded
  | PostLoadError
  | LoadPosts
  | PostsLoaded
  | PostsLoadError;

export const fromPostsActions = {
  LoadPost,
  PostLoaded,
  PostLoadError,
  LoadPosts,
  PostsLoaded,
  PostsLoadError,
};
