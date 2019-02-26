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
      bestOf: action.predicate.bestOf.bestOf,
      costs:
        action.predicate.costs &&
        Object.keys(action.predicate.costs)
          .filter(cost => action.predicate.costs[cost])
          .join(','),
      difficulties:
        action.predicate.difficulties &&
        Object.keys(action.predicate.difficulties)
          .filter(difficulty => action.predicate.difficulties[difficulty])
          .join(','),
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
      topicsOperator: action.predicate.topicsOperator,
    })),
    map(
      ({ bestOf, costs, difficulties, formats, topics, topicsOperator }) =>
        new fromRouterActions.Go({
          path: ['/resources'],
          query: {
            ...(bestOf ? { bestOf } : {}),
            ...(costs ? { costs } : {}),
            ...(difficulties ? { difficulties } : {}),
            ...(formats ? { formats } : {}),
            ...(topics ? { topics, topicsOperator } : {}),
          },
        }),
    ),
  );

  constructor(private actions$: Actions) {}
}
