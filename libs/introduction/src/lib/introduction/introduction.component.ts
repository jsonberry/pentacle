import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { listMarginReset } from '@pentacle/shared/util-style-framework';
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

  mainStyles = listMarginReset;

  constructor(private pagesFacade: PagesFacade) {}
}
