import { LOGIN_USER_FAILURE, LOGOUT_USER } from 'app/reducers/authReducer';

export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export const alertTypes = [LOGIN_USER_FAILURE, LOGOUT_USER] as const;

export interface Alert {
  type: typeof alertTypes[number];
  message?: string;
}

export type AlertsState = readonly Alert[];

interface AddAlertActionType {
  type: typeof ADD_ALERT;
  payload: Alert;
  meta: {
    index: number;
  };
}

interface RemoveAlertActionType {
  type: typeof REMOVE_ALERT;
  meta: {
    index: number;
  };
}

interface AlertActionType {
  type: typeof alertTypes[number];
  meta?: Record<string, any>;
}

export type AlertsActionTypes =
  | AddAlertActionType
  | RemoveAlertActionType
  | AlertActionType;
