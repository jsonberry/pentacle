import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { listMarginResetClass } from '@pentacle/shared/util-style-framework';
import { ignoreFalsySignals } from 'rxjs-toolkit';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'pentacle-introduction',
  template: `
    <main
      [innerHTML]="introductionPageContent$ | async | bypassSecurityTrustHtml"
      [ngClass]="mainStyles"
      pentacleCmsLink
    ></main>
  `,
})
export class IntroductionComponent {
  introductionPageContent$ = this.pagesFacade.getPage$('introduction').pipe(
    ignoreFalsySignals(),
    pluck('content'),
  );

  mainStyles = listMarginResetClass;

  constructor(private pagesFacade: PagesFacade) {}
}
