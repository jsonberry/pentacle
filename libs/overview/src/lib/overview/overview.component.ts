import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesFacade } from '@pentacle/pages-state';
import { filter, pluck, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'pentacle-overview',
  template: `
    <h1>{{ title$ | async }}</h1>
    <main
      [innerHTML]="content$ | async | bypassSecurityTrustHtml"
      pentacleCmsLink
    ></main>
  `,
  styles: [
    `
      @media (max-width: 600px) {
        ::ng-deep blockquote {
          margin-inline-start: 20px;
          margin-inline-end: 20px;
        }
      }
    `,
  ],
})
export class OverviewComponent {
  overviewPageData$ = this.pagesFacade.getPage$('overview').pipe(
    filter(data => !!data),
    shareReplay(),
  );
  title$ = this.overviewPageData$.pipe(
    pluck('title'),
    tap(title => this.titleService.setTitle(`Pentacle - ${title}`)),
  );
  content$ = this.overviewPageData$.pipe(pluck('content'));

  constructor(private pagesFacade: PagesFacade, private titleService: Title) {}
}
