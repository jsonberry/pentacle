import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ToastState, TOAST_FEATURE_KEY } from '@pentacle/models';

const getToastState = createFeatureSelector<ToastState>(TOAST_FEATURE_KEY);

const getIsActive = createSelector(getToastState, ({ isActive }) => isActive);

const getStatus = createSelector(getToastState, ({ status }) => status);

export const toastQuery = {
  getToastState,
  getIsActive,
  getStatus,
};
