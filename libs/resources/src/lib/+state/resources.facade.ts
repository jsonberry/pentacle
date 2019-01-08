import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { select, Store } from '@ngrx/store';
import { PostDetailDTO, State } from '@pentacle/models';
import { ignoreFalsySignals, propsAreTruthy } from 'rxjs-toolkit';
import { map, pluck, shareReplay } from 'rxjs/operators';
import { resourcesQuery } from './resources.selectors';

@Injectable({
  providedIn: 'root',
})
export class ResourcesFacade {
  resources$ = this.store.pipe(select(resourcesQuery.getResources));

  filteredResourceCount$ = this.store.pipe(
    select(resourcesQuery.getFilteredResourcesCount),
  );

  resourceByRoute$ = this.store.pipe(
    select(resourcesQuery.getResouceDetailsByRoute),
    ignoreFalsySignals(),
    shareReplay(),
  );

  contentByRoute$ = this.resourceByRoute$.pipe(
    map(post => this.sanitizer.bypassSecurityTrustHtml(post.content)), // this is for things like YouTube iframes
  );

  titleByRoute$ = this.resourceByRoute$.pipe(
    pluck<PostDetailDTO, string>('title'),
  );

  sourceByRoute$ = this.store.pipe(
    select(resourcesQuery.getSourceByRoute),
    propsAreTruthy(),
    ignoreFalsySignals(),
  );

  constructor(private store: Store<State>, private sanitizer: DomSanitizer) {}
}
