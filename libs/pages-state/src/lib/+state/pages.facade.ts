import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PagesPartialState } from './pages.reducer';
import { pagesQuery } from './pages.selectors';

@Injectable()
export class PagesFacade {
  pageIds$ = this.store.pipe(select(pagesQuery.getPageIds));
  pagesDictionary$ = this.store.pipe(select(pagesQuery.getPagesDictionary));
  pagesArray$ = this.store.pipe(select(pagesQuery.getPagesArray));

  constructor(private store: Store<PagesPartialState>) {}

  page$(id: string) {
    return this.store.pipe(select(pagesQuery.getPage(id)));
  }
}
