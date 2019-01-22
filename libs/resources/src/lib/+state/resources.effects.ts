import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { PostsFacade } from '@pentacle/posts-state';
import { fromTagsActions } from '@pentacle/tags-state';
import {
  postContentNotLoaded,
  postsNotLoaded,
  tagsNotLoaded,
} from '@pentacle/utils';
import { ResourcesDetailComponent } from '../resources-detail/resources-detail.component';
import { ResourcesComponent } from '../resources/resources.component';

@Injectable()
export class ResourcesEffects {
  @Effect({ dispatch: false })
  loadResources$ = this.dataPersistence.navigation(ResourcesComponent, {
    run: (a, s: State) => {
      if (postsNotLoaded(s.posts.entities)) {
        this.postsFacade.loadPosts();
      }
    },
  });

  @Effect({ dispatch: false })
  loadResource$ = this.dataPersistence.navigation(ResourcesDetailComponent, {
    run: (a, s: State) => {
      if (postContentNotLoaded(s.posts.entities[s.router.state.params.id])) {
        this.postsFacade.resourceDetailRouteLoadPost(s.router.state.params.id);
      }
    },
  });

  @Effect()
  loadTags$ = this.dataPersistence.navigation(ResourcesComponent, {
    run: (a, s: State) => {
      if (tagsNotLoaded(s.tags.entities)) {
        return new fromTagsActions.ResourcePageLoadTags();
      }
    },
  });

  constructor(
    private dataPersistence: DataPersistence<State>,
    private postsFacade: PostsFacade,
  ) {}
}
