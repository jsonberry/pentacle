import { Action } from '@ngrx/store';

export enum ToastActionTypes {
  Pending = '[Toast] Show Pending',
  Success = '[Toast] Show Success',
  Failure = '[Toast] Show Failue',
  Hide = '[Toast] Hide',
}

export class PendingToast implements Action {
  readonly type = ToastActionTypes.Pending;
  constructor(public message: string) {}
}

export class SuccessToast implements Action {
  readonly type = ToastActionTypes.Success;
  constructor(public message: string) {}
}

export class FailureToast implements Action {
  readonly type = ToastActionTypes.Failure;
  constructor(public message: string) {}
}

export class HideToast implements Action {
  readonly type = ToastActionTypes.Hide;
}

export type ToastUnion = SuccessToast | FailureToast | HideToast | PendingToast;

export const fromToastActions = {
  SuccessToast,
  FailureToast,
  HideToast,
  PendingToast,
};
