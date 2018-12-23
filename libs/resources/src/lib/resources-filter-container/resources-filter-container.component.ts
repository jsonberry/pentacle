import { Component } from '@angular/core';
import { ResourcesFilterPredicate } from '@pentacle/models';
import { ResourcesFacade } from '../+state/resources.facade';

@Component({
  selector: 'pentacle-resources-filter-container',
  templateUrl: './resources-filter-container.component.html',
  styleUrls: ['./resources-filter-container.component.scss'],
})
export class ResourcesFilterContainerComponent {
  filterFormGroups$ = this.resourcesFacade.filterFormGroups$;

  constructor(private resourcesFacade: ResourcesFacade) {}

  filterResources(predicate: ResourcesFilterPredicate) {
    this.resourcesFacade.filterResources(predicate);
  }
}
