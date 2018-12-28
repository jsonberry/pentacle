import {
  fromToastActions,
  ToastActionTypes,
  SuccessToast,
  FailureToast,
  HideToast,
  PendingToast,
} from './toast.action';

import {
  activeToastGenerator,
  ToastStatus,
  toastReducer,
  initialState,
} from './toast.reducer';

describe('Toast', () => {
  describe('Actions', () => {
    describe('SuccessToast', () => {
      const message = 'Message sent';
      const action: SuccessToast = new fromToastActions.SuccessToast(message);
      it('should have the correct type', () => {
        expect(action.type).toBe(ToastActionTypes.Success);
      });
      it('should have the correct message', () => {
        expect(action.message).toBe(message);
      });
    });
    describe('FailureToast', () => {
      const message = 'Failed to send message';
      const action: FailureToast = new fromToastActions.FailureToast(message);
      it('should have the correct type', () => {
        expect(action.type).toBe(ToastActionTypes.Failure);
      });
      it('should have the correct message', () => {
        expect(action.message).toBe(message);
      });
    });
    describe('HideToast', () => {
      const action: HideToast = new fromToastActions.HideToast();
      it('should have the correct type', () => {
        expect(action.type).toBe(ToastActionTypes.Hide);
      });
    });
    describe('PendingToast', () => {
      const message = 'Sending Message...';
      const action: PendingToast = new fromToastActions.PendingToast(message);
      it('should have the correct type', () => {
        expect(action.type).toBe(ToastActionTypes.Pending);
      });
      it('should have the correct message', () => {
        expect(action.message).toBe(message);
      });
    });
  });

  describe('activeToastGenerator', () => {
    const action = new fromToastActions.SuccessToast('Message sent');
    const activeToast = activeToastGenerator(action);
    it('should return a function', () => {
      expect(activeToast).toBeTruthy();
    });
    it('should return an obect when a status is passed into it', () => {
      const { message, isActive, status } = activeToast(ToastStatus.Success);
      expect(message).toEqual('Message sent');
      expect(isActive).toEqual(true);
      expect(status).toEqual(ToastStatus.Success);
    });
  });

  describe('Reducer', () => {
    const reducerGenerator = (state = initialState) => action => {
      return toastReducer(state, action);
    };
    const testState = reducerGenerator();
    describe('default', () => {
      it('should return initial state', () => {
        const action: any = {};
        const result = testState(action);
        expect(result).toEqual(initialState);
      });
    });
    describe('pending', () => {
      it('should handle a pending action', () => {
        const action = new PendingToast('Sending message...');
        const result = testState(action);
        expect(result.isActive).toBe(true);
        expect(result.message).toBe('Sending message...');
        expect(result.status).toBe(ToastStatus.Pending);
      });
    });
    describe('success', () => {
      it('should handle a success action', () => {
        const action = new SuccessToast('Message sent');
        const result = testState(action);
        expect(result.isActive).toBe(true);
        expect(result.message).toBe('Message sent');
        expect(result.status).toBe(ToastStatus.Success);
      });
    });
    describe('failure', () => {
      it('should handle a failure action', () => {
        const action = new FailureToast('Failed to send message');
        const result = testState(action);
        expect(result.isActive).toBe(true);
        expect(result.message).toBe('Failed to send message');
        expect(result.status).toBe(ToastStatus.Fail);
      });
    });
    describe('hide', () => {
      it('should handle a hide action', () => {
        const action = new HideToast();
        const result = testState(action);
        expect(result.isActive).toBe(false);
        expect(result.message).toBe(undefined);
      });
    });
  });
});
