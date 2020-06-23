import { User } from 'types';

export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_NOT_PENDING = 'LOGIN_USER_NOT_PENDING';

export const LOGOUT_USER = 'LOGOUT_USER';

export interface AuthState {
  readonly user: User | null;
  readonly isLoading: boolean;
  readonly error: string | null;
  readonly loginRequestTimestamp: number | null;
  readonly loginResolveTimestamp: number | null;
}

interface LoginUserPendingAction {
  type: typeof LOGIN_USER_PENDING;
  meta: {
    timestamp: number;
  };
}

interface LoginUserFailureAction {
  type: typeof LOGIN_USER_FAILURE;
  meta: {
    timestamp: number;
    error: string;
  };
}

interface LoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  payload: User;
  meta: {
    timestamp: number;
  };
}

interface LoginUserNotPendingAction {
  type: typeof LOGIN_USER_NOT_PENDING;
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

export type AuthActionTypes =
  | LoginUserPendingAction
  | LoginUserFailureAction
  | LoginUserSuccessAction
  | LoginUserNotPendingAction
  | LogoutUserAction;
