import { Component } from '@angular/core';
import {
  mq,
  rem,
  listMarginResetClass,
} from '@pentacle/shared/util-style-framework';
import { css, cx } from 'emotion';
import { ResourcesFacade } from '../+state/resources.facade';

@Component({
  selector: 'pentacle-resources-detail',
  template: `
    <main *ngIf="(resource$ | async) as resource">
      <h1 [ngClass]="titleStyles">
        {{ resource?.title | decodeHtmlEntities }}
      </h1>
      <span class="p4">{{ resource?.difficulty | titlecase }}</span>
      <clr-tooltip>
        <clr-icon clrTooltipTrigger shape="info-circle" size="24"></clr-icon>
        <clr-tooltip-content clrSize="lg" *clrIfOpen>
          <span>{{ resource?.difficultyTooltip?.content }}</span>
        </clr-tooltip-content>
      </clr-tooltip>
      <span [ngStyle]="{ display: 'block' }">{{
        resource?.format | uppercase
      }}</span>
      <div>
        <span
          *ngFor="let topic of resource?.tags; index as i"
          class="badge"
          [ngClass]="'badge-' + (i + 1)"
          >{{ topic }}
        </span>
      </div>
      <section
        [ngClass]="summaryStyles"
        [innerHTML]="resource?.content | bypassSecurityTrustHtml"
      ></section>
      <section class="clr-row" *ngIf="(hasSource$ | async)">
        <div class="clr-col-lg-6 clr-col-12">
          <div class="card">
            <div class="card-header">{{ resource?.source?.origin }}</div>
            <div class="card-img"><img [src]="resource?.image?.full" /></div>
            <div class="card-block">
              <div class="card-title">{{ resource?.source?.title }}</div>
            </div>
            <div class="card-footer">
              <a
                [href]="resource?.source?.url"
                target="_blank"
                class="btn btn-sm btn-link"
                >Go To Source</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
})
export class ResourcesDetailComponent {
  resource$ = this.resourcesFacade.resourceByRoute$;
  hasSource$ = this.resourcesFacade.hasSource$;

  titleStyles = css({
    marginBottom: rem(16),
    maxWidth: rem(500),
  });

  summaryStyles = cx(
    css(
      mq({
        img: {
          width: ['100%', 'inherit'],
        },
        iframe: {
          width: ['100%', rem(640)],
        },
        blockquote: {
          fontStyle: 'italic',
        },
        figure: {
          margin: [rem(16, 0), rem(16, 40)],
        },
      }),
    ),
    listMarginResetClass,
  );

  constructor(private resourcesFacade: ResourcesFacade) {}
}
