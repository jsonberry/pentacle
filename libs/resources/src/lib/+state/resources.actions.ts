import { Action } from '@ngrx/store';
import { ResourcesFilterPredicate } from '@pentacle/models';

export enum ResourcesActionTypes {
  Filter = '[Resources] Filter',
}

export class Filter implements Action {
  readonly type = ResourcesActionTypes.Filter;
  constructor(public predicate: ResourcesFilterPredicate) {}
}

export type ResourcesAction = Filter;

export const fromResourcesActions = {
  Filter,
};
