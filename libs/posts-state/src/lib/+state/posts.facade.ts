import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@pentacle/models';
import { fromPostsActions } from './posts.actions';
import { postsQuery } from './posts.selectors';

@Injectable({
  providedIn: 'root',
})
export class PostsFacade {
  postIds$ = this.store.pipe(select(postsQuery.getPostIds));
  postsDictionary$ = this.store.pipe(select(postsQuery.getPostsDictionary));
  postsArray$ = this.store.pipe(select(postsQuery.getPostsArray));

  constructor(private store: Store<State>) {}

  post$(id: string) {
    return this.store.pipe(select(postsQuery.getPost(id)));
  }

  loadPosts(): void {
    this.store.dispatch(new fromPostsActions.LoadPosts());
  }

  resourceDetailRouteLoadPost(postId: string): void {
    this.store.dispatch(
      new fromPostsActions.ResourceDetailRouteLoadPost(postId),
    );
  }
}
