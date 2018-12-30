import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@pentacle/models';
import { PagesDataService } from '@pentacle/services';
import { filter, map, switchMapTo } from 'rxjs/operators';
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

  constructor(
    private store: Store<State>,
    private pagesDataService: PagesDataService,
  ) {}

  page$(id: string) {
    return this.store.pipe(select(pagesQuery.getPage(id)));
  }

  fetchPageData$(id: string) {
    return this.page$(id).pipe(
      filter(page => !page),
      switchMapTo(
        this.pagesDataService
          .getPage(id)
          .pipe(map(page => new fromPagesActions.PageLoaded(page))),
      ),
    );
  }
}
