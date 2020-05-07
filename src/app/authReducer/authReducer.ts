import { AuthState, AuthActionTypes, LOGIN_USER } from './authTypes';

const initialState: AuthState = {
  currentUser: null,
  loginTimestamp: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
        loginTimestamp: action.meta.timestamp,
      };
    default:
      return state;
  }
};
