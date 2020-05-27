import { User } from 'types';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export interface AuthState {
  readonly user: User | null;
  readonly loginTimestamp: number | null;
}

interface LoginUserAction {
  type: typeof LOGIN_USER;
  payload: User;
  meta: {
    timestamp: number;
  };
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

export type AuthActionTypes = LoginUserAction | LogoutUserAction;
