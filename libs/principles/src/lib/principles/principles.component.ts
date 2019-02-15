import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { filter, pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'pentacle-principles',
  template: `
    <h1 [innerHTML]="title$ | async"></h1>
    <main
      [innerHTML]="content$ | async | bypassSecurityTrustHtml"
      pentacleCmsLink
    ></main>
  `,
  styles: [
    `
      ::ng-deep ul {
        margin-top: 0.5rem;
        margin-left: 1rem;
      }
    `,
  ],
})
export class PrinciplesComponent {
  principlesPageData$ = this.pagesFacade.pageByRouteParamId$.pipe(
    filter(data => !!data),
    shareReplay(),
  );
  title$ = this.principlesPageData$.pipe(pluck('title'));
  content$ = this.principlesPageData$.pipe(pluck('content'));

  constructor(private pagesFacade: PagesFacade) {}
}
