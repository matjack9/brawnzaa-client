import { User } from 'types';
import { LOGIN_USER, LOGOUT_USER, AuthActionTypes } from './authTypes';

export const login = (user: User): AuthActionTypes => {
  return {
    type: LOGIN_USER,
    payload: user,
    meta: { timestamp: new Date().getTime() },
  };
};

export const logout = (): AuthActionTypes => {
  /* implement any side effects here */
  return {
    type: LOGOUT_USER,
  };
};
