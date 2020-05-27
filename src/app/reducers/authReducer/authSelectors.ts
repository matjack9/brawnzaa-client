import { RootState } from 'app/rootReducer';

export const selectIsLoggedIn = (state: RootState) => !!state.auth.user;
