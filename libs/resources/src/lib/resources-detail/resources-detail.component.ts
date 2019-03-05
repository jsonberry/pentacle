import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterFacade } from '@pentacle/router-state';
import {
  listMarginResetClass,
  mq,
  rem,
} from '@pentacle/shared/util-style-framework';
import { css, cx } from 'emotion';
import { map, tap } from 'rxjs/operators';
import { ResourcesFacade } from '../+state/resources.facade';

@Component({
  selector: 'pentacle-resources-detail',
  template: `
    <a
      [ngClass]="['btn', 'btn-icon', 'btn-link', backButtonStyles]"
      href="/resources"
      (click)="goBack($event)"
      ><clr-icon shape="caret left"></clr-icon> Back</a
    >
    <main *ngIf="(resource$ | async) as resource">
      <h1 [ngClass]="titleStyles">
        {{ resource?.title | decodeHtmlEntities }}
      </h1>
      <hr [ngClass]="hrStyles" />
      <div *ngIf="resource.bestOf" [ngClass]="bestOfStyles">
        <clr-icon shape="star" class="is-solid is-warning"></clr-icon>
        <span>Best of</span>
      </div>
      <span class="p4">{{ resource?.difficulty | titlecase }}</span>
      <clr-tooltip>
        <clr-icon clrTooltipTrigger shape="info-circle" size="24"></clr-icon>
        <clr-tooltip-content [clrSize]="toolTipSize$ | async" *clrIfOpen>
          <span>{{ resource?.difficultyTooltip?.content }}</span>
        </clr-tooltip-content>
      </clr-tooltip>
      <span [ngStyle]="{ display: 'block' }">{{
        resource?.format | uppercase
      }}</span>
      <span
        class="p7"
        [ngStyle]="{
          display: 'block',
          marginTop: '0',
          color: resource?.cost === 'free' ? '#48960C' : '#F52F22'
        }"
        >{{ resource?.cost === 'free' ? 'Free 🍺' : 'Paid' }}</span
      >
      <div>
        <span
          *ngFor="let topic of resource?.tags; index as i"
          class="badge"
          [ngClass]="'badge-' + (i + 1)"
          >{{ topic }}
        </span>
      </div>
      <section
        [innerHTML]="resource?.content | bypassSecurityTrustHtml"
        [ngClass]="summaryStyles"
        pentacleCmsLink
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
  toolTipSize$ = this.bp$
    .observe([Breakpoints.XSmall])
    .pipe(map(bpstate => (bpstate.matches ? 'sm' : 'lg')));
  resource$ = this.resourcesFacade.resourceByRoute$.pipe(
    tap(({ title }) => this.titleService.setTitle(`Pentacle - ${title}`)),
  );
  hasSource$ = this.resourcesFacade.hasSource$;
  backButtonStyles = css({
    marginLeft: `${rem(-17)} !important`,
  });
  hrStyles = css({
    marginTop: rem(24),
    marginBottom: rem(24),
  });
  bestOfStyles = css({
    display: 'flex',
    alignItems: 'center',
    span: {
      marginLeft: rem(8),
    },
  });
  titleStyles = css({
    margin: '0 auto',
    maxWidth: rem(700),
    textAlign: 'center',
  });
  summaryStyles = cx(
    listMarginResetClass,
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
  );

  constructor(
    private resourcesFacade: ResourcesFacade,
    private routerFacade: RouterFacade,
    private bp$: BreakpointObserver,
    private titleService: Title,
  ) {}

  goBack(e) {
    e.preventDefault();
    this.routerFacade.back();
  }
}
