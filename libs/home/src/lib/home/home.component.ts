import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { listMarginReset } from '@pentacle/shared/util-style-framework';
import { ignoreFalsySignals } from 'rxjs-toolkit';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'pentacle-home',
  template: `
    <main
      [innerHTML]="content$ | async | bypassSecurityTrustHtml"
      class="${listMarginReset}"
      pentacleCmsLink
    ></main>
  `,
})
export class HomeComponent {
  content$ = this.pagesFacade.getPage$('home').pipe(
    ignoreFalsySignals(),
    pluck('content'),
  );

  constructor(private pagesFacade: PagesFacade) {}
}
