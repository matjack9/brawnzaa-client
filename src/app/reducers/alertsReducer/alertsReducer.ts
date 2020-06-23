import {
  AlertsState,
  AlertsActionTypes,
  ADD_ALERT,
  REMOVE_ALERT,
  alertTypes,
} from './alertsTypes';

const initialState: AlertsState = [];

export const alertsReducer = (
  state = initialState,
  action: AlertsActionTypes
): AlertsState => {
  const ALERT_ACTION_TYPE = alertTypes.includes(action.type as any)
    ? (action.type as typeof alertTypes[number])
    : null;
  switch (action.type) {
    case ADD_ALERT:
      return [
        ...state.slice(0, action.meta.index),
        action.payload,
        ...state.slice(action.meta.index),
      ];
    case REMOVE_ALERT:
      return [
        ...state.slice(0, action.meta.index),
        ...state.slice(action.meta.index + 1),
      ];
    case ALERT_ACTION_TYPE:
      return [
        ...state,
        {
          type: action.type,
          ...(action.meta
            ? { message: action.meta.message || action.meta.error }
            : {}),
        },
      ];
    default:
      return state;
  }
};
