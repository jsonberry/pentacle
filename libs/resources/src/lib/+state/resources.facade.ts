import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { select, Store } from '@ngrx/store';
import { State } from '@pentacle/models';
import { ignoreFalsySignals, propsAreTruthy } from 'rxjs-toolkit';
import { mapTo } from 'rxjs/operators';
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
  );

  hasSource$ = this.store.pipe(
    select(resourcesQuery.getSourceByRoute),
    propsAreTruthy(),
    ignoreFalsySignals(),
    mapTo(true),
  );

  constructor(private store: Store<State>, private sanitizer: DomSanitizer) {}
}
