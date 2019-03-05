import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesFacade } from '@pentacle/pages-state';
import { ignoreFalsySignals } from 'rxjs-toolkit';
import { pluck, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'pentacle-modules',
  template: `
    <h1>{{ title$ | async }}</h1>
    <main [innerHTML]="content$ | async"></main>
  `,
  styles: [
    `
      ::ng-deep hr {
        margin-top: 1rem;
      }

      ::ng-deep hr + p:first-of-type {
        padding-left: 1rem;
      }
    `,
    `
      ::ng-deep ul,
      ::ng-deep ol {
        margin-top: 1rem;
        margin-left: 0.5rem;
      }

      ::ng-deep li > ul {
        margin-top: 0.5rem;
      }

      ::ng-deep li {
        margin-bottom: 0.75rem;
      }

      @media (min-width: 768px) {
        ::ng-deep ul,
        ::ng-deep ol {
          margin-left: 1rem;
        }
      }
    `,
  ],
})
export class ModulesComponent {
  modulesPageData$ = this.pagesFacade.pageByRouteParamId$.pipe(
    ignoreFalsySignals(),
    shareReplay(),
  );
  title$ = this.modulesPageData$.pipe(
    pluck('title'),
    tap(title => this.titleService.setTitle(`Pentacle - ${title}`)),
  );
  content$ = this.modulesPageData$.pipe(pluck('content'));

  constructor(private pagesFacade: PagesFacade, private titleService: Title) {}
}
