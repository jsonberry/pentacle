import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { ignoreFalsySignals } from 'rxjs-toolkit';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'pentacle-home',
  template: `
    <main
      [innerHTML]="content$ | async | bypassSecurityTrustHtml"
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
