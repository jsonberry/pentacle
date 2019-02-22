import { Component } from '@angular/core';
import { ResourcesFacade } from '../+state/resources.facade';
import { listMarginResetStyles } from '@pentacle/shared/util-style-framework';
import { css } from 'emotion';

@Component({
  selector: 'pentacle-resources',
  template: `
    <h1>Resources</h1>
    <button type="button" class="btn btn-outline" (click)="filterModal = true">
      How do I filter the list?
    </button>
    <button
      type="button"
      class="btn btn-outline"
      (click)="difficultyModal = true"
    >
      What do the difficulties mean?
    </button>
    <clr-modal [(clrModalOpen)]="filterModal">
      <h3 class="modal-title">Filtering the Resource List</h3>
      <div class="modal-body">
        <p>The filters are in the <strong>sidenav</strong>.</p>
        <p>You can filter the list by format, topic, and difficulty.</p>
        <p>
          For easier sharing the filters are powered reactivey by the URL. Keep
          in mind that if you hit 'back' in your browser from a resource detail
          then your filters will remain intact.
        </p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-primary"
          (click)="filterModal = false"
        >
          Close
        </button>
      </div></clr-modal
    >
    <clr-modal [(clrModalOpen)]="difficultyModal">
      <h3 class="modal-title">Difficulties Explained</h3>
      <div class="modal-body">
        <h4>Introductory</h4>
        <p>
          You're brand new to this topic, you want to see what it's about or
          just get a casual high-level glimpse into it.
        </p>
        <h4>Beginner</h4>
        <p>
          You have an idea of what this is about, but you're still at the very
          beginning of your working knowledge.
        </p>
        <h4>Intermediate</h4>
        <p>
          You're able to adapt and apply the basic knowledge to solve new
          challenges, and you're ready to learn more.
        </p>
        <h4>Advanced</h4>
        <p>
          You're well beyond the basics, you've worked with this enough to have
          solved some difficult challenges, and you're ready for advanced
          concepts.
        </p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-primary"
          (click)="difficultyModal = false"
        >
          Close
        </button>
      </div></clr-modal
    >

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
  filterModal = false;
  difficultyModal = false;
  ulStyles = css({ ...listMarginResetStyles });

  constructor(private resourcesFacade: ResourcesFacade) {}
}
