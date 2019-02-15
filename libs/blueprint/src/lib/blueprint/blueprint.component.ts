import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { filter, pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'pentacle-blueprint',
  template: `
    <h1 [ngStyle]="{ marginBottom: '1rem' }">{{ title$ | async }}</h1>
    <main [innerHTML]="content$ | async"></main>
  `,
  styles: [
    `
      ::ng-deep img {
        max-width: 100%;
      }
    `,
  ],
})
export class BlueprintComponent {
  bluePrintPageData$ = this.pagesFacade.getPage$('blueprint').pipe(
    filter(data => !!data),
    shareReplay(),
  );
  title$ = this.bluePrintPageData$.pipe(pluck('title'));
  content$ = this.bluePrintPageData$.pipe(pluck('content'));

  constructor(private pagesFacade: PagesFacade) {}
}
