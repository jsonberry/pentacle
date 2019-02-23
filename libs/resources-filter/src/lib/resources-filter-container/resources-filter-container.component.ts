import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResourcesFilterPredicate } from '@pentacle/models';
import { ResourcesFilterFacade } from '../+state/resources-filter.facade';

@Component({
  selector: 'pentacle-resources-filter-container',
  template: `
    <pentacle-resources-filter
      [open]="open"
      [filterFormGroups]="filterFormGroups$ | async"
      (filtersApplied)="filterResources($event)"
    ></pentacle-resources-filter>
  `,
})
export class ResourcesFilterContainerComponent {
  @Input() open: boolean;
  @Output() modalClosed: EventEmitter<null> = new EventEmitter();
  filterFormGroups$ = this.facade.filterFormGroups$;

  constructor(private facade: ResourcesFilterFacade) {}

  filterResources(predicate: ResourcesFilterPredicate) {
    this.facade.filterResources(predicate);
    this.modalClosed.emit();
  }
}
