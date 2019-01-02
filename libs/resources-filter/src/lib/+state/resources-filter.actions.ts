import { Action } from '@ngrx/store';
import { ResourcesFilterPredicate } from '@pentacle/models';

export enum ResourcesFilterActionTypes {
  FilterResources = '[Resources Filter] Filter Resources',
}

export class FilterResources implements Action {
  readonly type = ResourcesFilterActionTypes.FilterResources;
  constructor(public predicate: ResourcesFilterPredicate) {}
}

export type ResourcesFilterActionUnion = FilterResources;

export const fromResourcesFilterActions = {
  FilterResources,
};
