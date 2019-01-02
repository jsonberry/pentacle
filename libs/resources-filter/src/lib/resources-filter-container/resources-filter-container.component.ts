import { Component } from '@angular/core';
import { ResourcesFilterPredicate } from '@pentacle/models';
import { ResourcesFilterFacade } from '../+state/resources-filter.facade';

@Component({
  selector: 'pentacle-resources-filter-container',
  templateUrl: './resources-filter-container.component.html',
  styleUrls: ['./resources-filter-container.component.scss'],
})
export class ResourcesFilterContainerComponent {
  filterFormGroups$ = this.facade.filterFormGroups$;
  show$ = this.facade.showFilter$;

  constructor(private facade: ResourcesFilterFacade) {}

  filterResources(predicate: ResourcesFilterPredicate) {
    this.facade.filterResources(predicate);
  }
}
