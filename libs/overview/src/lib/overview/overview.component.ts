import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';
import { filter, shareReplay, pluck } from 'rxjs/operators';

@Component({
  selector: 'pentacle-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  overviewPageData$ = this.pagesFacade.getPage$('overview').pipe(
    filter(data => !!data),
    shareReplay(),
  );
  title$ = this.overviewPageData$.pipe(pluck('title'));
  content$ = this.overviewPageData$.pipe(pluck('content'));

  constructor(private pagesFacade: PagesFacade) {}
}
