import { ToastState, ToastStatus } from '@pentacle/models';
import { ToastActionTypes, ToastUnion } from './toast.action';

export const initialState: ToastState = {
  message: undefined,
  status: ToastStatus.Hide,
};

export function toastReducer(
  state: ToastState = initialState,
  action: ToastUnion,
): ToastState {
  switch (action.type) {
    case ToastActionTypes.Pending: {
      return { message: action.message, status: ToastStatus.Info };
    }
    case ToastActionTypes.Success: {
      return { message: action.message, status: ToastStatus.Success };
    }
    case ToastActionTypes.Failure: {
      return { message: action.message, status: ToastStatus.Danger };
    }
    case ToastActionTypes.Hide: {
      return { message: undefined, status: ToastStatus.Hide };
    }
    default: {
      return state;
    }
  }
}
