import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { fromPagesActions, PagesFacade } from '@pentacle/pages-state';
import { OverviewComponent } from './overview/overview.component';

@Injectable()
export class OverviewEffects {
  @Effect()
  loadHomePageData$ = this.dataPersistence.navigation(OverviewComponent, {
    run: () => this.pagesFacade.fetchPageData$('overview'),
    onError: (a: ActivatedRouteSnapshot, error) =>
      new fromPagesActions.PageLoadError(error),
  });

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
