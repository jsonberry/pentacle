import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { PagesFacade } from '@pentacle/pages-state';
import { PrinciplesComponent } from '../principles/principles.component';

@Injectable()
export class PrinciplesEffects {
  @Effect()
  loadPrinciplesPageData$ = this.dataPersistence.navigation(
    PrinciplesComponent,
    {
      run: (a: ActivatedRouteSnapshot, s: State) =>
        this.pagesFacade.loadPage(s.router.state.params.id),
    },
  );

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
