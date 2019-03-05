import { Component } from '@angular/core';
import { ResourcesFacade } from '../+state/resources.facade';

@Component({
  selector: 'pentacle-resources',
  template: `
    <h1>Resources</h1>
    <a
      href="https://github.com/jsonberry/pentacle/issues/new?assignees=jsonberry&labels=resources&template=new-resource.md&title=New+Resource+Request"
      target="_blank"
      >Submit New Resource</a
    >
    <button
      type="button"
      class="btn btn-primary"
      [ngStyle]="{ display: 'block' }"
      (click)="filterModalOpen = true"
    >
      Filter
    </button>

    <pentacle-resources-filter-container
      [open]="filterModalOpen"
      (modalClosed)="filterModalOpen = false"
    ></pentacle-resources-filter-container>

    <p>{{ count$ | async }} Resource(s) match your filter criteria</p>

    <section class="card-columns">
      <pentacle-resources-article
        *ngFor="let resource of (resources$ | async)"
        [article]="resource"
      ></pentacle-resources-article>
    </section>
  `,
})
export class ResourcesComponent {
  count$ = this.resourcesFacade.filteredResourceCount$;
  resources$ = this.resourcesFacade.resources$;
  filterModalOpen = false;

  constructor(private resourcesFacade: ResourcesFacade) {}
}
