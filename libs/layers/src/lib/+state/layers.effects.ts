import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { fromPagesActions, PagesFacade } from '@pentacle/pages-state';
import { LayersComponent } from '../layers/layers.component';

@Injectable()
export class LayersEffects {
  @Effect()
  loadLayersPageData$ = this.dataPersistence.navigation(LayersComponent, {
    run: (a: ActivatedRouteSnapshot, s: State) =>
      this.pagesFacade.fetchPageData$(
        s.router.state.params.id ? s.router.state.params.id : 'layers',
      ),
    onError: (a: ActivatedRouteSnapshot, error) =>
      new fromPagesActions.PageLoadError(error),
  });

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
