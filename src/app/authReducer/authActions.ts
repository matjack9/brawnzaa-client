import { navigate } from '@reach/router';
import { Route } from 'common/utils/constants/routes';
import { User } from 'types';
import { LOGIN_USER, LOGOUT_USER, AuthActionTypes } from './authTypes';

export const login = (user: User): AuthActionTypes => {
  return {
    type: LOGIN_USER,
    payload: user,
    meta: { timestamp: Date.now() },
  };
};

export const logout = (): AuthActionTypes => {
  /* implement any side effects here */
  navigate(Route.ROOT);
  return {
    type: LOGOUT_USER,
  };
};
