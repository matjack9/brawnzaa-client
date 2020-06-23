import { RootState } from 'app/rootReducer';

export const selectAlerts = (state: RootState) => state.alerts;

export const selectCurrentAlert = (state: RootState) => state.alerts[0];
