import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { PagesFacade } from '@pentacle/pages-state';
import { OverviewComponent } from '../overview/overview.component';

@Injectable()
export class OverviewEffects {
  @Effect()
  loadHomePageData$ = this.dataPersistence.navigation(OverviewComponent, {
    run: () => this.pagesFacade.loadPage('overview'),
  });

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
