import { Action } from '@ngrx/store';
import { PostDTO, PostDetailDTO } from '@pentacle/models';

export enum PostsActionTypes {
  ResourceDetailRouteLoadPost = '[Resources Detail Route] Load Post Detail',
  PostLoaded = '[Posts API] Post Loaded',
  PostLoadError = '[Posts API] Post Load Error',
  LoadPosts = '[Resources Route] Load All Posts Summaries',
  PostsLoaded = '[Posts API] Posts Loaded',
  PostsLoadError = '[Posts API] Posts Load Error',
}

export class ResourceDetailRouteLoadPost implements Action {
  readonly type = PostsActionTypes.ResourceDetailRouteLoadPost;
  constructor(public postId: string) {}
}

export class PostLoadError implements Action {
  readonly type = PostsActionTypes.PostLoadError;
  constructor(public error: any) {}
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
  | ResourceDetailRouteLoadPost
  | PostLoaded
  | PostLoadError
  | LoadPosts
  | PostsLoaded
  | PostsLoadError;

export const fromPostsActions = {
  ResourceDetailRouteLoadPost,
  PostLoaded,
  PostLoadError,
  LoadPosts,
  PostsLoaded,
  PostsLoadError,
};
