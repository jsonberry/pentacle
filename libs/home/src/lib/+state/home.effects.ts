import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { PageIds, State } from '@pentacle/models';
import { PagesFacade } from '@pentacle/pages-state';
import { pageNotLoaded } from '@pentacle/utils';
import { HomeComponent } from '../home/home.component';

@Injectable()
export class HomeEffects {
  @Effect({ dispatch: false })
  loadHomePageData$ = this.dataPersistence.navigation(HomeComponent, {
    run: (a, s: State) => {
      if (pageNotLoaded(PageIds.HOME, s.pages.entities)) {
        this.pagesFacade.loadPage(PageIds.HOME);
      }
    },
  });

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
