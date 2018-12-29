import {
  fromToastActions,
  SuccessToast,
  FailureToast,
  HideToast,
  PendingToast,
} from './toast.action';

import { toastReducer, initialState } from './toast.reducer';
import { ToastStatus } from '@pentacle/models';

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
      expect(result.message).toBe('Sending message...');
      expect(result.status).toBe(ToastStatus.Info);
    });
  });
  describe('success', () => {
    it('should handle a success action', () => {
      const action = new SuccessToast('Message sent');
      const result = testState(action);
      expect(result.message).toBe('Message sent');
      expect(result.status).toBe(ToastStatus.Success);
    });
  });
  describe('failure', () => {
    it('should handle a failure action', () => {
      const action = new FailureToast('Failed to send message');
      const result = testState(action);
      expect(result.message).toBe('Failed to send message');
      expect(result.status).toBe(ToastStatus.Danger);
    });
  });
  describe('hide', () => {
    it('should handle a hide action', () => {
      const action = new HideToast();
      const result = testState(action);
      expect(result.message).toBe(undefined);
    });
  });
});
