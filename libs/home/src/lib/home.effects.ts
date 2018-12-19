import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { fromPagesActions, PagesFacade } from '@pentacle/pages-state';
import { HomeComponent } from './home/home.component';

@Injectable()
export class HomeEffects {
  @Effect()
  loadHomePageData$ = this.dataPersistence.navigation(HomeComponent, {
    run: () => this.pagesFacade.fetchPageData$('home'),
    onError: (a: ActivatedRouteSnapshot, error) =>
      new fromPagesActions.PageLoadError(error),
  });

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
