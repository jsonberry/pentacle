import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { PageIds, State } from '@pentacle/models';
import { PagesFacade } from '@pentacle/pages-state';
import { pageNotLoaded } from '@pentacle/utils';
import { BlueprintComponent } from '../blueprint/blueprint.component';

@Injectable()
export class BlueprintEffects {
  @Effect({ dispatch: false })
  loadBlueprintPageData$ = this.dataPersistence.navigation(BlueprintComponent, {
    run: (a, s: State) => {
      if (pageNotLoaded(PageIds.BLUEPRINT, s.pages.entities)) {
        this.pagesFacade.loadPage(PageIds.BLUEPRINT);
      }
    },
  });

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
