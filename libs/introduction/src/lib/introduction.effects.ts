import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { fromPagesActions, PagesFacade } from '@pentacle/pages-state';
import { IntroductionComponent } from './introduction/introduction.component';

@Injectable()
export class IntroductionEffects {
  @Effect()
  loadIntroductionPageData$ = this.dataPersistence.navigation(
    IntroductionComponent,
    {
      run: () => this.pagesFacade.fetchPageData$('introduction'),
      onError: (a: ActivatedRouteSnapshot, error) =>
        new fromPagesActions.PageLoadError(error),
    },
  );

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
