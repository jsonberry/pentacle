import { Component } from '@angular/core';
import { PagesFacade } from '@pentacle/pages-state';

@Component({
  selector: 'pentacle-pages-loading-progress',
  templateUrl: './pages-loading-progress.component.html',
  styleUrls: ['./pages-loading-progress.component.scss'],
})
export class PagesLoadingProgressComponent {
  loading$ = this.pagesFacade.pagesLoading$;
  constructor(private pagesFacade: PagesFacade) {}
}
