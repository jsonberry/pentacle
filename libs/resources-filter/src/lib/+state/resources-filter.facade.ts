import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ResourcesFilterPredicate, State } from '@pentacle/models';
import { fromResourcesFilterActions } from './resources-filter.actions';
import { resourcesFilterQuery } from './resources-filter.selectors';

@Injectable({
  providedIn: 'root',
})
export class ResourcesFilterFacade {
  filterFormGroups$ = this.store.pipe(
    select(resourcesFilterQuery.getResourceFilterFormGroups),
  );
  showFilter$ = this.store.pipe(
    select(resourcesFilterQuery.getShowResourcesFilter),
  );

  constructor(private store: Store<State>) {}

  filterResources(predicate: ResourcesFilterPredicate) {
    this.store.dispatch(
      new fromResourcesFilterActions.FilterResources(predicate),
    );
  }
}
