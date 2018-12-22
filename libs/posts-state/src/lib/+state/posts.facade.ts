import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@pentacle/models';
import { PostsDataService } from '@pentacle/services';
import { filter, map, switchMapTo } from 'rxjs/operators';
import { fromPostsActions } from './posts.actions';
import { postsQuery, isPostDetailDTO } from './posts.selectors';

@Injectable({
  providedIn: 'root',
})
export class PostsFacade {
  postIds$ = this.store.pipe(select(postsQuery.getPostIds));
  postsDictionary$ = this.store.pipe(select(postsQuery.getPostsDictionary));
  postsArray$ = this.store.pipe(select(postsQuery.getPostsArray));
  postsLoaded$ = this.store.pipe(select(postsQuery.getPostsLoaded));

  constructor(
    private store: Store<State>,
    private postsDataService: PostsDataService,
  ) {}

  post$(id: string) {
    return this.store.pipe(select(postsQuery.getPost(id)));
  }

  fetchPosts$() {
    return this.postsLoaded$.pipe(
      filter(loaded => !loaded),
      switchMapTo(
        this.postsDataService
          .getPosts()
          .pipe(map(posts => new fromPostsActions.PostsLoaded(posts))),
      ),
    );
  }

  fetchPost$(id: string) {
    return this.post$(id).pipe(
      filter(post => !isPostDetailDTO(post)),
      switchMapTo(
        this.postsDataService
          .getPost(id)
          .pipe(map(post => new fromPostsActions.PostLoaded(post))),
      ),
    );
  }
}
