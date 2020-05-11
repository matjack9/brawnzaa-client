import { combineReducers, AnyAction, Reducer } from 'redux';
import configureStore from 'app/configureStore';
import authReducer, { LOGOUT_USER } from 'app/authReducer';

const appReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof appReducer>;

export const rootReducer: Reducer = (
  state: RootState,
  action: AnyAction
): RootState => {
  if (action.type === LOGOUT_USER) {
    return appReducer(configureStore(undefined).getState(), action);
  }
  return appReducer(state, action);
};
