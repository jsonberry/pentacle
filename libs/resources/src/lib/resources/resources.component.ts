import { Component } from '@angular/core';
import { ResourcesFacade } from '../+state/resources.facade';

@Component({
  selector: 'pentacle-resources',
  template: `
    <h1>Resources</h1>
    <h2>Filter resources in the side nav!</h2>
    <p>{{ count$ | async }} Resource(s)</p>
    <pentacle-resources-article
      *ngFor="let resource of (resources$ | async)"
      [article]="resource"
    ></pentacle-resources-article>
  `,
})
export class ResourcesComponent {
  count$ = this.resourcesFacade.filteredResourceCount$;
  resources$ = this.resourcesFacade.resources$;

  constructor(private resourcesFacade: ResourcesFacade) {}
}
