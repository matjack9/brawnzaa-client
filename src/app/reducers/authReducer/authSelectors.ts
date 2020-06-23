import { RootState } from 'app/rootReducer';

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectIsLoggedIn = (state: RootState) => !!state.auth.user;

export const selectIsAuthLoading = (state: RootState) => state.auth.isLoading;
