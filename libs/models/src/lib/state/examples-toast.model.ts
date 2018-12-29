import { Action } from '@ngrx/store';

export const TOAST_FEATURE_KEY = 'examples-toast';

export enum ToastStatus {
  Info = 'info',
  Success = 'success',
  Danger = 'danger',
  Hide = 'hide',
}

export interface ToastState {
  message: string;
  status: ToastStatus;
}

export type ActionDelayTuple = [Action, number];
