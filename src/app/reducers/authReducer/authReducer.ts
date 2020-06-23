import {
  AuthState,
  AuthActionTypes,
  LOGIN_USER_PENDING,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_NOT_PENDING,
  LOGOUT_USER,
} from './authTypes';

const initialState: AuthState = {
  user: null,
  isLoading: true,
  error: null,
  loginRequestTimestamp: null,
  loginResolveTimestamp: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_USER_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
        loginRequestTimestamp: action.meta.timestamp,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: action.meta.error,
        loginResolveTimestamp: action.meta.timestamp,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
        loginResolveTimestamp: action.meta.timestamp,
      };
    case LOGIN_USER_NOT_PENDING:
      return {
        ...state,
        isLoading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
