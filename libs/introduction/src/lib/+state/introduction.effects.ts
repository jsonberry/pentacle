import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { PageIds, State } from '@pentacle/models';
import { PagesFacade } from '@pentacle/pages-state';
import { pageNotLoaded } from '@pentacle/utils';
import { IntroductionComponent } from '../introduction/introduction.component';

@Injectable()
export class IntroductionEffects {
  @Effect({ dispatch: false })
  loadIntroductionPageData$ = this.dataPersistence.navigation(
    IntroductionComponent,
    {
      run: (a, s: State) => {
        if (pageNotLoaded(PageIds.INTRODUCTION, s.pages.entities)) {
          this.pagesFacade.loadPage(PageIds.INTRODUCTION);
        }
      },
    },
  );

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
