import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@pentacle/models';
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
  constructor(private store: Store<State>) {}
}
