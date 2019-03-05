import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PagesFacade } from '@pentacle/pages-state';
import { filter, pluck, shareReplay, tap } from 'rxjs/operators';

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
  title$ = this.bluePrintPageData$.pipe(
    pluck('title'),
    tap(title => this.titleService.setTitle(`Pentacle - ${title}`)),
  );
  content$ = this.bluePrintPageData$.pipe(pluck('content'));

  constructor(
    private pagesFacade: PagesFacade,
    private titleService: Title,
    private metaService: Meta,
  ) {
    metaService.addTags([
      {
        name: 'description',
        content: "Pentacle's Blueprint of Reactive Web Architecture",
      },
      {
        name: 'twitter:card',
        content: "Pentacle's Blueprint of Reactive Web Architecture",
      },
      {
        property: 'og:title',
        content: 'Pentacle - Blueprint',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://pentacledev.com/blueprint',
      },
      {
        property: 'og:image',
        content:
          'https://pentacledev.sfo2.cdn.digitaloceanspaces.com/2019/02/pentacle-blueprint-1.png',
      },
      {
        property: 'og:description',
        content: "Pentacle's Blueprint of Reactive Web Architecture",
      },
      {
        property: 'og:site_name',
        content: 'Pentacle',
      },
    ]);
  }
}
