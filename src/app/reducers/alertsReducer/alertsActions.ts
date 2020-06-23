import { AlertsActionTypes, ADD_ALERT, REMOVE_ALERT, Alert } from './alertsTypes';

export const addAlert = (
  alert: Alert,
  index: number = Infinity
): AlertsActionTypes => ({
  type: ADD_ALERT,
  payload: alert,
  meta: {
    index,
  },
});

export const removeAlert = (index: number = 0): AlertsActionTypes => ({
  type: REMOVE_ALERT,
  meta: {
    index,
  },
});
