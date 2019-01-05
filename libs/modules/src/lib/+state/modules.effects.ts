import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { PagesFacade } from '@pentacle/pages-state';
import { pageNotLoaded } from '@pentacle/utils';
import { ModulesComponent } from '../modules/modules.component';

@Injectable()
export class ModulesEffects {
  @Effect({ dispatch: false })
  loadModulesPageData$ = this.dataPersistence.navigation(ModulesComponent, {
    run: (a, s: State) => {
      if (pageNotLoaded(s.router.state.params.id, s.pages.entities)) {
        this.pagesFacade.loadPage(s.router.state.params.id);
      }
    },
  });

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
