import { NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';

export enum RouterActions {
  GO = '[Router] Go',
  BACK = '[Router] Back',
  FORWARD = '[Router] Forward',
}

export class Go implements Action {
  readonly type = RouterActions.GO;
  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    },
  ) {}
}

export class Back implements Action {
  readonly type = RouterActions.BACK;
}

export class Forward implements Action {
  readonly type = RouterActions.FORWARD;
}

export type RouterAction = Go | Back | Forward;

export const fromRouterActions = {
  Go,
  Back,
  Forward,
};
