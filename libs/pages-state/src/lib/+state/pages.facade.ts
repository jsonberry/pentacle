import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@pentacle/models';
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
  pagesLoading$ = this.store.pipe(select(pagesQuery.getPagesLoading));

  constructor(private store: Store<State>) {}

  getPage$(id: string) {
    return this.store.pipe(select(pagesQuery.getPage(id)));
  }

  loadPage(id: string): void {
    this.store.dispatch(new fromPagesActions.LoadPage(id));
  }
}
