import { Component } from '@angular/core';
import { ResourcesFacade } from '../+state/resources.facade';

@Component({
  selector: 'pentacle-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent {
  resources$ = this.resourcesFacade.resources$;
  count$ = this.resourcesFacade.filteredResourceCount$;
  constructor(private resourcesFacade: ResourcesFacade) {}
}
