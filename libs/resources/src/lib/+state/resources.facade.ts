import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { select, Store } from '@ngrx/store';
import { PostDetailDTO, State } from '@pentacle/models';
import { isPostDetailDTO } from '@pentacle/posts-state';
import { filter, map } from 'rxjs/operators';
import { resourcesQuery } from './resources.selectors';

@Injectable({
  providedIn: 'root',
})
export class ResourcesFacade {
  allResources$ = this.store.pipe(select(resourcesQuery.getAllResources));
  readResources$ = this.store.pipe(select(resourcesQuery.getReadResources));
  watchResources$ = this.store.pipe(select(resourcesQuery.getWatchResources));
  resourcesByRoute$ = this.store.pipe(
    select(resourcesQuery.getResourcesByRoute),
  );
  resourceByRoute$ = this.store.pipe(select(resourcesQuery.getResourceByRoute));
  contentByRoute$ = this.resourceByRoute$.pipe(
    filter((post): post is PostDetailDTO => !!post && isPostDetailDTO(post)),
    map(post => this.sanitizer.bypassSecurityTrustHtml(post.content)),
  );
  constructor(private store: Store<State>, private sanitizer: DomSanitizer) {}
}
