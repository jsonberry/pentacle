import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesFacade } from '@pentacle/pages-state';
import { listMarginResetClass } from '@pentacle/shared/util-style-framework';
import { ignoreFalsySignals } from 'rxjs-toolkit';
import { pluck, tap } from 'rxjs/operators';

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
    tap(({ title }) => this.titleService.setTitle(`Pentacle - ${title}`)),
    pluck('content'),
  );

  mainStyles = listMarginResetClass;

  constructor(private pagesFacade: PagesFacade, private titleService: Title) {}
}
