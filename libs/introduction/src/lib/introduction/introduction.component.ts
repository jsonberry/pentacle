import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { pluck } from 'rxjs/operators';
import { ignoreFalsySignals } from 'rxjs-toolkit';

@Component({
  selector: 'pentacle-introduction',
  template: `
    <main
      [innerHTML]="introductionPageContent$ | async | bypassSecurityTrustHtml"
      pentacleCmsLink
    ></main>
  `,
})
export class IntroductionComponent {
  introductionPageContent$ = this.pagesFacade.getPage$('introduction').pipe(
    ignoreFalsySignals(),
    pluck('content'),
  );

  constructor(private pagesFacade: PagesFacade) {}
}
