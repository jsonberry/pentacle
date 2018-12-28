import { ToastUnion, ToastActionTypes, SuccessToast } from './toast.action';

export enum ToastStatus {
  Pending = '[Toast] Pending',
  Success = '[Toast] Success',
  Fail = '[Toast] Fail',
}

interface ToastState {
  message: string;
  status: ToastStatus;
  isActive: boolean;
}

export const initialState: ToastState = {
  message: undefined,
  status: ToastStatus.Pending,
  isActive: false,
};

export function toastReducer(
  state: ToastState = initialState,
  action: ToastUnion,
): ToastState {
  const activeToast = activeToastGenerator(action);
  switch (action.type) {
    case ToastActionTypes.Pending: {
      return { ...state, ...activeToast(ToastStatus.Pending) };
    }
    case ToastActionTypes.Success: {
      return { ...state, ...activeToast(ToastStatus.Success) };
    }
    case ToastActionTypes.Failure: {
      return { ...state, ...activeToast(ToastStatus.Fail) };
    }
    case ToastActionTypes.Hide: {
      return { ...state, message: undefined, isActive: false };
    }
    default: {
      return { ...state };
    }
  }
}

export const activeToastGenerator = (action: any) => (status: ToastStatus) => {
  return { message: action.message, isActive: true, status };
};
