import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fromRouterActions } from '@pentacle/router-state';
import { mapTo } from 'rxjs/operators';
import { PostsActionTypes } from './posts.actions';

@Injectable()
export class PostsEffects {
  @Effect()
  postNotFound$ = this.actions$.pipe(
    ofType(PostsActionTypes.PostLoadError, PostsActionTypes.PostsLoadError),
    mapTo(new fromRouterActions.Go({ path: ['/404'] })),
  );

  constructor(private actions$: Actions) {}
}
