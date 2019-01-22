import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { listMarginResetClass } from '@pentacle/shared/util-style-framework';
import { ignoreFalsySignals } from 'rxjs-toolkit';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'pentacle-home',
  template: `
    <main
      [innerHTML]="content$ | async | bypassSecurityTrustHtml"
      [ngClass]="mainStyles"
      pentacleCmsLink
    ></main>
  `,
})
export class HomeComponent {
  content$ = this.pagesFacade.getPage$('home').pipe(
    ignoreFalsySignals(),
    pluck('content'),
  );

  mainStyles = listMarginResetClass;

  constructor(private pagesFacade: PagesFacade) {}
}
