import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { select, Store } from '@ngrx/store';
import { PostDetailDTO, State } from '@pentacle/models';
import { isPostDetailDTO } from '@pentacle/posts-state';
import { filter, map, pluck, shareReplay } from 'rxjs/operators';
import { resourcesQuery } from './resources.selectors';

@Injectable({
  providedIn: 'root',
})
export class ResourcesFacade {
  resourceByRoute$ = this.store.pipe(
    select(resourcesQuery.getResourceByRoute),
    shareReplay(),
  );
  contentByRoute$ = this.resourceByRoute$.pipe(
    filter((post): post is PostDetailDTO => !!post && isPostDetailDTO(post)),
    map(post => this.sanitizer.bypassSecurityTrustHtml(post.content)), // this is for things like YouTube iframes
  );
  titleByRoute$ = this.resourceByRoute$.pipe(
    filter((post): post is PostDetailDTO => !!post && isPostDetailDTO(post)),
    pluck('title'),
  );
  resources$ = this.store.pipe(select(resourcesQuery.getResources));
  filteredResourceCount$ = this.store.pipe(
    select(resourcesQuery.getFilteredResourcesCount),
  );

  constructor(private store: Store<State>, private sanitizer: DomSanitizer) {}
}
