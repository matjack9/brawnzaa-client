import { combineReducers } from 'redux';
import authReducer from 'app/reducers/authReducer';
import alertsReducer from 'app/reducers/alertsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  alerts: alertsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
