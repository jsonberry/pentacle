import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { fromPostsActions, PostsFacade } from '@pentacle/posts-state';
import { fromRouterActions } from '@pentacle/router-state';
import { fromTagsActions, TagsFacade } from '@pentacle/tags-state';
import { map } from 'rxjs/operators';
import { ResourcesDetailComponent } from '../resources-detail/resources-detail.component';
import { ResourcesComponent } from '../resources/resources.component';
import { ResourcesAction, ResourcesActionTypes } from './resources.actions';

@Injectable()
export class ResourcesEffects {
  @Effect()
  loadResources$ = this.dataPersistence.navigation(ResourcesComponent, {
    run: () => this.postsFacade.fetchPosts$(),
    onError: (a: ActivatedRouteSnapshot, error) =>
      new fromPostsActions.PostsLoadError(error),
  });

  @Effect()
  loadResource$ = this.dataPersistence.navigation(ResourcesDetailComponent, {
    run: (a, s: State) => this.postsFacade.fetchPost$(s.router.state.params.id),
    onError: (a: ActivatedRouteSnapshot, error) =>
      new fromPostsActions.PostLoadError(error),
  });

  @Effect()
  loadTags$ = this.dataPersistence.navigation(ResourcesComponent, {
    run: () => this.tagsFacade.fetchTags$(),
    onError: (a: ActivatedRouteSnapshot, error) =>
      new fromTagsActions.TagsLoadError(error),
  });

  @Effect()
  filterResources$ = this.actions$.pipe(
    ofType<ResourcesAction>(ResourcesActionTypes.Filter),
    map(action => ({
      formats:
        action.predicate.formats &&
        Object.keys(action.predicate.formats)
          .filter(format => action.predicate.formats[format])
          .join(','),
      topics:
        action.predicate.topics &&
        Object.keys(action.predicate.topics)
          .filter(topic => action.predicate.topics[topic])
          .join(','),
    })),
    map(({ formats, topics }) => {
      const query = {};

      if (formats) {
        Object.assign(query, { formats });
      }

      if (topics) {
        Object.assign(query, { topics });
      }

      return new fromRouterActions.Go({
        path: ['/resources'],
        query,
      });
    }),
  );

  constructor(
    private dataPersistence: DataPersistence<State>,
    private postsFacade: PostsFacade,
    private tagsFacade: TagsFacade,
    private actions$: Actions,
    private store: Store<State>,
  ) {}
}
