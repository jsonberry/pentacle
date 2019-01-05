import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '@pentacle/models';
import { pagesLoadingProgressQuery } from './pages-loading-progress.selectors';

@Injectable({
  providedIn: 'root',
})
export class PagesLoadingProgressFacade {
  show$ = this.store.pipe(
    select(pagesLoadingProgressQuery.getShowLoadingProgress),
  );
  constructor(private store: Store<State>) {}
}
