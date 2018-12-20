import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';

@Component({
  selector: 'pentacle-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  overviewPageData$ = this.pagesFacade.page$('overview');
  constructor(private pagesFacade: PagesFacade) {}
}
