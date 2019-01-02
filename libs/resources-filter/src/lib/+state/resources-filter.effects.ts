import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fromRouterActions } from '@pentacle/router-state';
import { map } from 'rxjs/operators';
import {
  FilterResources,
  ResourcesFilterActionTypes,
} from './resources-filter.actions';

@Injectable()
export class ResourcesFilterEffects {
  @Effect()
  filterResources$ = this.actions$.pipe(
    ofType<FilterResources>(ResourcesFilterActionTypes.FilterResources),
    map(action => ({
      formats:
        action.predicate.formats &&
        Object.keys(action.predicate.formats)
          .filter(format => action.predicate.formats[format])
          .join(','),
      topics:
        action.predicate.topics &&
        Object.keys(action.predicate.topics)
          .filter(topic => action.predicate.topics[topic])
          .join(','),
    })),
    map(({ formats, topics }) => {
      const query = {};

      if (formats) {
        Object.assign(query, { formats });
      }

      if (topics) {
        Object.assign(query, { topics });
      }

      return new fromRouterActions.Go({
        path: ['/resources'],
        query,
      });
    }),
  );

  constructor(private actions$: Actions) {}
}
