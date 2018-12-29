import { toastQuery } from './toast.selectors';
import { TOAST_FEATURE_KEY, ToastStatus } from '@pentacle/models';
import { initialState, toastReducer } from './toast.reducer';
import { ToastUnion, HideToast, SuccessToast } from './toast.action';

describe('Toast Selectors', () => {
  const mockStore = (action: ToastUnion) => ({
    [TOAST_FEATURE_KEY]: toastReducer(initialState, action),
  });
  describe('getToastState', () => {
    it('should get toast state', () => {
      const store = mockStore(new HideToast());
      const result = toastQuery.getToastState(store);
      expect(result).toBeTruthy();
      expect(result.message).toBe(undefined);
    });
  });
  describe('getIsActive', () => {
    it('should return isActive from toast state', () => {
      const store = mockStore(new HideToast());
      const result = toastQuery.getIsActive(store);
      expect(result).toBe(false);
    });
  });
  describe('getStatus', () => {
    it('should return status from toast state', () => {
      const store = mockStore(new SuccessToast('Flavortown'));
      const result = toastQuery.getStatus(store);
      expect(result).toBe(ToastStatus.Success);
    });
  });
  describe('getMessage', () => {
    it('should return message from toast state', () => {
      const store = mockStore(new SuccessToast('Flavortown'));
      const result = toastQuery.getMessage(store);
      expect(result).toBe('Flavortown');
    });
  });
});
