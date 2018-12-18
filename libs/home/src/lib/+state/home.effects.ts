import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { HomeComponent } from '../home/home.component';
import {
  fromPagesActions,
  PagesPartialState,
  PAGES_FEATURE_KEY,
} from '@pentacle/pages-state';
import { PagesDataService } from '@pentacle/services';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeEffects {
  @Effect()
  loadHomePageData$ = this.dataPersistence.navigation(HomeComponent, {
    run: (a: ActivatedRouteSnapshot, state: PagesPartialState) => {
      // should replace with real web app state
      if (state[PAGES_FEATURE_KEY].entities['home']) {
        return;
      }

      return this.pagesDataService
        .getPage('home')
        .pipe(map(page => new fromPagesActions.PageLoaded(page)));
    },

    onError: (a: ActivatedRouteSnapshot, error) => {
      console.error('Error', error);
      return new fromPagesActions.PageLoadError(error);
    },
  });

  constructor(
    private dataPersistence: DataPersistence<PagesPartialState>,
    private pagesDataService: PagesDataService,
  ) {}
}
