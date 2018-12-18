import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PagesPartialState } from '@pentacle/pages-state';
import { homeQuery } from './home.selectors';

@Injectable({
  providedIn: 'root',
})
export class HomeFacade {
  homePageData$ = this.store.pipe(select(homeQuery.getHomePageData));
  constructor(private store: Store<PagesPartialState>) {}
}
