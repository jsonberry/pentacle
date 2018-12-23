import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { select, Store } from '@ngrx/store';
import {
  PostDetailDTO,
  ResourcesFilterPredicate,
  State,
} from '@pentacle/models';
import { isPostDetailDTO } from '@pentacle/posts-state';
import { filter, map } from 'rxjs/operators';
import { fromResourcesActions } from './resources.actions';
import { resourcesQuery } from './resources.selectors';

@Injectable({
  providedIn: 'root',
})
export class ResourcesFacade {
  resourceByRoute$ = this.store.pipe(select(resourcesQuery.getResourceByRoute));
  contentByRoute$ = this.resourceByRoute$.pipe(
    filter((post): post is PostDetailDTO => !!post && isPostDetailDTO(post)),
    map(post => this.sanitizer.bypassSecurityTrustHtml(post.content)), // this is for things like YouTube iframes
  );
  resources$ = this.store.pipe(select(resourcesQuery.getResources));
  filterFormGroups$ = this.store.pipe(
    select(resourcesQuery.getResourceFilterFormGroups),
  );

  constructor(private store: Store<State>, private sanitizer: DomSanitizer) {}

  filterResources(predicate: ResourcesFilterPredicate) {
    this.store.dispatch(new fromResourcesActions.Filter(predicate));
  }
}
