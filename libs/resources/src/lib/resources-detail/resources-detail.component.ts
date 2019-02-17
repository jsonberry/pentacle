import { Component } from '@angular/core';
import { mq, rem } from '@pentacle/shared/util-style-framework';
import { css } from 'emotion';
import { ResourcesFacade } from '../+state/resources.facade';

@Component({
  selector: 'pentacle-resources-detail',
  template: `
    <!--
      title$ and content$ are set to innerHTML to properly display HTML entities
    -->
    <h1 [ngClass]="h1" [innerHTML]="title$ | async"></h1>
    <main [ngClass]="main" [innerHTML]="content$ | async"></main>
    <div *ngIf="(source$ | async) as source">
      <div class="card">
        <div class="card-header">Source</div>
        <div class="card-block">
          <div class="card-title">{{ source.origin }}</div>
          <div class="card-text">{{ source.title }}</div>
        </div>
        <div class="card-footer">
          <a [href]="source.url" target="_blank" class="btn btn-sm btn-link"
            >Go To Article</a
          >
        </div>
      </div>
    </div>
  `,
})
export class ResourcesDetailComponent {
  title$ = this.resourcesFacade.titleByRoute$;
  content$ = this.resourcesFacade.contentByRoute$;
  source$ = this.resourcesFacade.sourceByRoute$;

  h1 = css({
    marginBottom: rem(16),
    maxWidth: rem(500),
  });

  main = css(
    mq({
      img: {
        width: ['100%', 'inherit'],
      },
      iframe: {
        width: ['100%', rem(640)],
      },
      figure: {
        margin: [rem(16, 0), rem(16, 40)],
      },
      li: {
        marginLeft: rem(16),
        marginBottom: rem(16),
      },
    }),
  );

  constructor(private resourcesFacade: ResourcesFacade) {}
}
