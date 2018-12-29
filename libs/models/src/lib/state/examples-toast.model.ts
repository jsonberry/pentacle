export const TOAST_FEATURE_KEY = 'examples-toast';

export enum ToastStatus {
  Pending = '[Toast] Pending',
  Success = '[Toast] Success',
  Fail = '[Toast] Fail',
}

export interface ToastState {
  message: string;
  status: ToastStatus;
  isActive: boolean;
}
