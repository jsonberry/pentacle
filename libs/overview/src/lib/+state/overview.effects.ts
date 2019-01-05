import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { PageIds, State } from '@pentacle/models';
import { PagesFacade } from '@pentacle/pages-state';
import { pageNotLoaded } from '@pentacle/utils';
import { OverviewComponent } from '../overview/overview.component';

@Injectable()
export class OverviewEffects {
  @Effect({ dispatch: false })
  loadHomePageData$ = this.dataPersistence.navigation(OverviewComponent, {
    run: (a, s: State) => {
      if (pageNotLoaded(PageIds.OVERVIEW, s.pages.entities)) {
        this.pagesFacade.loadPage(PageIds.OVERVIEW);
      }
    },
  });

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
