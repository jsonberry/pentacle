import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { PagesFacade } from '@pentacle/pages-state';
import { HomeComponent } from '../home/home.component';

@Injectable()
export class HomeEffects {
  @Effect()
  loadHomePageData$ = this.dataPersistence.navigation(HomeComponent, {
    run: () => this.pagesFacade.loadPage('home'),
  });

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
