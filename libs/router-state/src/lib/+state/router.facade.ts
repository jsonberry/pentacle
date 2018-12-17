import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Back, Forward, Go } from './router.actions';
import { RouterState } from './router.reducer';
import { routerQuery } from './router.selectors';

@Injectable({
  providedIn: 'root',
})
export class RouterFacade {
  url = this.store.pipe(select(routerQuery.getUrl));
  params = this.store.pipe(select(routerQuery.getParams));
  queryParams = this.store.pipe(select(routerQuery.getQueryParams));

  constructor(private store: Store<RouterState>) {}

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
