import { combineReducers, AnyAction } from 'redux';
import configureStore from 'app/configureStore';
import authReducer, { LOGOUT_USER } from 'app/authReducer';

const appReducer = combineReducers({
  auth: authReducer,
});

type AppState = ReturnType<typeof appReducer>;

export const rootReducer = (
  state: AppState,
  action: AnyAction
): typeof appReducer => {
  if (action.type === LOGOUT_USER) {
    return (appReducer(
      configureStore(undefined).getState(),
      action
    ) as unknown) as typeof appReducer;
  }
  return (appReducer(state, action) as unknown) as typeof appReducer;
};

export type RootState = ReturnType<typeof rootReducer>;
