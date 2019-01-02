import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { fromPostsActions, PostsFacade } from '@pentacle/posts-state';
import { fromTagsActions, TagsFacade } from '@pentacle/tags-state';
import { ResourcesDetailComponent } from '../resources-detail/resources-detail.component';
import { ResourcesComponent } from '../resources/resources.component';

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

  constructor(
    private dataPersistence: DataPersistence<State>,
    private postsFacade: PostsFacade,
    private tagsFacade: TagsFacade,
  ) {}
}
