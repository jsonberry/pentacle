import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fromRouterActions } from '@pentacle/router-state';
import { mapTo } from 'rxjs/operators';
import { PagesActionTypes } from './pages.actions';

@Injectable()
export class PagesEffects {
  @Effect()
  pageNotFound$ = this.actions$.pipe(
    ofType(PagesActionTypes.PageLoadError),
    mapTo(new fromRouterActions.Go({ path: ['/404'] })),
  );

  constructor(private actions$: Actions) {}
}
