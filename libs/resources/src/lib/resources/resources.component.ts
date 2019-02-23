import { Component } from '@angular/core';
import { ResourcesFacade } from '../+state/resources.facade';
import { listMarginResetStyles } from '@pentacle/shared/util-style-framework';
import { css } from 'emotion';

@Component({
  selector: 'pentacle-resources',
  template: `
    <h1>Resources</h1>
    <button
      type="button"
      class="btn btn-primary"
      (click)="filterModalOpen = true"
    >
      Filter
    </button>
    <button class="btn" (click)="difficultyModal = true">
      Difficulties Explained
    </button>
    <pentacle-resources-filter-container
      [open]="filterModalOpen"
      (modalClosed)="filterModalOpen = false"
    ></pentacle-resources-filter-container>
    <clr-modal
      [(clrModalOpen)]="difficultyModal"
      [clrModalStaticBackdrop]="false"
    >
      <h3 class="modal-title">Difficulties Explained</h3>
      <div class="modal-body">
        <h4>Introductory</h4>
        <p>
          You're brand new to this topic, you want to see what it's all about.
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
  filterModalOpen = false;
  difficultyModal = false;
  ulStyles = css({ ...listMarginResetStyles });

  constructor(private resourcesFacade: ResourcesFacade) {}
}
