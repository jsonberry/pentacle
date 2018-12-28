import { ToastState, ToastStatus } from '@pentacle/models';
import { ToastActionTypes, ToastUnion } from './toast.action';

export const initialState: ToastState = {
  message: undefined,
  status: ToastStatus.Pending,
  isActive: false,
};

export function toastReducer(
  state: ToastState = initialState,
  action: ToastUnion,
): ToastState {
  const toastState = toastStateGenerator(action);

  switch (action.type) {
    case ToastActionTypes.Pending: {
      return toastState(ToastStatus.Pending);
    }
    case ToastActionTypes.Success: {
      return toastState(ToastStatus.Success);
    }
    case ToastActionTypes.Failure: {
      return toastState(ToastStatus.Fail);
    }
    case ToastActionTypes.Hide: {
      return toastState(ToastStatus.Fail);
    }
    default: {
      return state;
    }
  }
}

export const toastStateGenerator = (action: ToastUnion) => (
  status: ToastStatus,
) =>
  action.type === ToastActionTypes.Hide
    ? initialState
    : { message: action.message, isActive: true, status };
