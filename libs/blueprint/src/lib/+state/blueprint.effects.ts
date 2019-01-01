import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { State } from '@pentacle/models';
import { PagesFacade } from '@pentacle/pages-state';
import { BlueprintComponent } from '../blueprint/blueprint.component';

@Injectable()
export class BlueprintEffects {
  @Effect()
  loadBlueprintPageData$ = this.dataPersistence.navigation(BlueprintComponent, {
    run: () => this.pagesFacade.loadPage('blueprint'),
  });

  constructor(
    private dataPersistence: DataPersistence<State>,
    private pagesFacade: PagesFacade,
  ) {}
}
