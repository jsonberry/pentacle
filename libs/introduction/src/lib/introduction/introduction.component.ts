import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesFacade } from '@pentacle/pages-state';
import { listMarginResetClass } from '@pentacle/shared/util-style-framework';
import { ignoreFalsySignals } from 'rxjs-toolkit';
import { pluck, tap } from 'rxjs/operators';

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
    tap(({ title }) => this.titleService.setTitle(`Pentacle - ${title}`)),
    pluck('content'),
  );

  mainStyles = listMarginResetClass;

  constructor(private pagesFacade: PagesFacade, private titleService: Title) {}
}
