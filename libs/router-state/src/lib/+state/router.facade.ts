import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@pentacle/models';
import { Back, Forward, Go } from './router.actions';
import { routerQuery } from './router.selectors';

@Injectable({
  providedIn: 'root',
})
export class RouterFacade {
  url = this.store.pipe(select(routerQuery.getUrl));
  params = this.store.pipe(select(routerQuery.getParams));
  queryParams = this.store.pipe(select(routerQuery.getQueryParams));

  constructor(private store: Store<State>) {}

  go(params) {
    this.store.dispatch(new Go(params));
  }

  back() {
    this.store.dispatch(new Back());
  }

  forward() {
    this.store.dispatch(new Forward());
  }
}
