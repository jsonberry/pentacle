import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '@pentacle/models';
import { fromRouterActions } from '@pentacle/router-state';
import { PagesDataService } from '@pentacle/services';
import { of } from 'rxjs';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';
import {
  fromPagesActions,
  LoadPage,
  PageLoadError,
  PagesActionTypes,
} from './pages.actions';

@Injectable()
export class PagesEffects {
  @Effect()
  pageNotFound$ = this.actions$.pipe(
    ofType<PageLoadError>(PagesActionTypes.PageLoadError),
    mapTo(new fromRouterActions.Go({ path: ['/404'] })),
  );

  @Effect()
  loadPage$ = this.actions$.pipe(
    ofType<LoadPage>(PagesActionTypes.LoadPage),
    switchMap(({ pageId }) =>
      this.pagesDataService.getPage(pageId).pipe(
        map(page => new fromPagesActions.PageLoaded(page)),
        catchError(error => of(new fromPagesActions.PageLoadError(error))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private pagesDataService: PagesDataService,
  ) {}
}
