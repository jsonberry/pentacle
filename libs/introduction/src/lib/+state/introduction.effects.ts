import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { PagesFacade } from '@pentacle/pages-state';
import { IntroductionComponent } from '../introduction/introduction.component';

@Injectable()
export class IntroductionEffects {
  @Effect()
  loadIntroductionPageData$ = this.dataPersistence.navigation(
    IntroductionComponent,
    {
      run: () => this.pagesFacade.loadPage('introduction'),
    },
  );

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
