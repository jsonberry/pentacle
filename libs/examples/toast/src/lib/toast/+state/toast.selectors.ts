import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ToastState, TOAST_FEATURE_KEY, ToastStatus } from '@pentacle/models';

const getToastState = createFeatureSelector<ToastState>(TOAST_FEATURE_KEY);

const getIsActive = createSelector(
  getToastState,
  ({ status }) => (status === ToastStatus.Hide ? false : true),
);

const getStatus = createSelector(getToastState, ({ status }) => status);

const getMessage = createSelector(getToastState, ({ message }) => message);

export const toastQuery = {
  getToastState,
  getIsActive,
  getStatus,
  getMessage,
};
