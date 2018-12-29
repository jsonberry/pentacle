import {
  fromToastActions,
  ToastActionTypes,
  SuccessToast,
  FailureToast,
  HideToast,
  PendingToast,
} from './toast.action';

describe('Toast Actions', () => {
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
