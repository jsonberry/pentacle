import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PageIds, State } from '@pentacle/models';
import { fromPagesActions } from './pages.actions';
import { pagesQuery } from './pages.selectors';

@Injectable({
  providedIn: 'root',
})
export class PagesFacade {
  pageIds$ = this.store.pipe(select(pagesQuery.getPageIds));
  pagesDictionary$ = this.store.pipe(select(pagesQuery.getPagesDictionary));
  pagesArray$ = this.store.pipe(select(pagesQuery.getPagesArray));
  pageByRouteParamId$ = this.store.pipe(
    select(pagesQuery.getPageByRouteParamId),
  );

  constructor(private store: Store<State>) {}

  getPage$(id: string) {
    return this.store.pipe(select(pagesQuery.getPage(id)));
  }

  loadPage(pageId: PageIds): void {
    this.store.dispatch(new fromPagesActions.LoadPage(pageId));
  }
}
