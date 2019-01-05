import { Component } from '@angular/core';
import { PagesLoadingProgressFacade } from '../+state/pages-loading-progress.facade';

@Component({
  selector: 'pentacle-pages-loading-progress',
  templateUrl: './pages-loading-progress.component.html',
  styleUrls: ['./pages-loading-progress.component.scss'],
})
export class PagesLoadingProgressComponent {
  show$ = this.facade.show$;
  constructor(private facade: PagesLoadingProgressFacade) {}
}
