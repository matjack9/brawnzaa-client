import { loginToServerWithEmailAndPassword } from 'services/auth';
import { AppThunk, User } from 'types';
import {
  AuthActionTypes,
  LOGIN_USER_PENDING,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_NOT_PENDING,
  LOGOUT_USER,
} from './authTypes';
import {
  setUserInSessionStorage,
  removeUserFromSessionStorage,
} from 'common/utils/auth';

export const setLoginPending = (): AuthActionTypes => ({
  type: LOGIN_USER_PENDING,
  meta: { timestamp: Date.now() },
});

export const setLoginFailure = (error: string): AuthActionTypes => {
  removeUserFromSessionStorage();
  return {
    type: LOGIN_USER_FAILURE,
    meta: {
      timestamp: Date.now(),
      error,
    },
  };
};

export const setLoginSuccess = (user: User): AuthActionTypes => {
  setUserInSessionStorage(user);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
    meta: { timestamp: Date.now() },
  };
};

export const setLoginNoLongerPending = (): AuthActionTypes => ({
  type: LOGIN_USER_NOT_PENDING,
});

export const setLogout = (): AuthActionTypes => {
  removeUserFromSessionStorage();
  return {
    type: LOGOUT_USER,
  };
};

export const loginWithEmailAndPassword = (
  email: string,
  password: string,
  isRemembering: boolean
): AppThunk<Promise<void>> => async dispatch => {
  dispatch(setLoginPending());
  try {
    await loginToServerWithEmailAndPassword(email, password, isRemembering);
    /* useAuthSubscription will dispatch LOGIN_USER_SUCCESS */
  } catch (error) {
    dispatch(setLoginFailure(error.message));
  }
};
