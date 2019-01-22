import { Component } from '@angular/core';
import { ResourcesFilterPredicate } from '@pentacle/models';
import { ResourcesFilterFacade } from '../+state/resources-filter.facade';

@Component({
  selector: 'pentacle-resources-filter-container',
  template: `
    <pentacle-resources-filter
      *ngIf="(show$ | async)"
      [filterFormGroups]="filterFormGroups$ | async"
      (filterPredicate)="filterResources($event)"
    ></pentacle-resources-filter>
  `,
})
export class ResourcesFilterContainerComponent {
  filterFormGroups$ = this.facade.filterFormGroups$;
  show$ = this.facade.showFilter$;

  constructor(private facade: ResourcesFilterFacade) {}

  filterResources(predicate: ResourcesFilterPredicate) {
    this.facade.filterResources(predicate);
  }
}
