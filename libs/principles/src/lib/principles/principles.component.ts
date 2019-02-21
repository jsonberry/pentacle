import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { listMarginReset } from '@pentacle/shared/util-style-framework';
import { ignoreFalsySignals } from 'rxjs-toolkit';
import { pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'pentacle-principles',
  template: `
    <h1 [innerHTML]="title$ | async"></h1>
    <main
      [innerHTML]="content$ | async | bypassSecurityTrustHtml"
      class="${listMarginReset}"
      pentacleCmsLink
    ></main>
  `,
})
export class PrinciplesComponent {
  principlesPageData$ = this.pagesFacade.pageByRouteParamId$.pipe(
    ignoreFalsySignals(),
    shareReplay(),
  );
  title$ = this.principlesPageData$.pipe(pluck('title'));
  content$ = this.principlesPageData$.pipe(pluck('content'));

  constructor(private pagesFacade: PagesFacade) {}
}
