import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fromRouterActions } from '@pentacle/router-state';
import { PostsDataService } from '@pentacle/services';
import { of } from 'rxjs';
import { catchError, map, mapTo, switchMap, switchMapTo } from 'rxjs/operators';
import {
  fromPostsActions,
  LoadPosts,
  PostsActionTypes,
  ResourceDetailRouteLoadPost,
} from './posts.actions';

@Injectable()
export class PostsEffects {
  @Effect()
  postNotFound$ = this.actions$.pipe(
    ofType(PostsActionTypes.PostLoadError, PostsActionTypes.PostsLoadError),
    mapTo(new fromRouterActions.Go({ path: ['/404'] })),
  );

  @Effect()
  loadPosts$ = this.actions$.pipe(
    ofType<LoadPosts>(PostsActionTypes.LoadPosts),
    switchMapTo(
      this.postsDataService.getPosts().pipe(
        map(posts => new fromPostsActions.PostsLoaded(posts)),
        catchError(error => of(new fromPostsActions.PostsLoadError(error))),
      ),
    ),
  );

  @Effect()
  resourceDetailRouteLoadPost$ = this.actions$.pipe(
    ofType<ResourceDetailRouteLoadPost>(
      PostsActionTypes.ResourceDetailRouteLoadPost,
    ),
    switchMap(({ postId }) =>
      this.postsDataService.getPost(postId).pipe(
        map(post => new fromPostsActions.PostLoaded(post)),
        catchError(error => of(new fromPostsActions.PostLoadError(error))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private postsDataService: PostsDataService,
  ) {}
}
