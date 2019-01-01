import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { filter, pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'pentacle-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.scss'],
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
