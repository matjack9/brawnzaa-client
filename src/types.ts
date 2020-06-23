import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'app/rootReducer';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export interface User {
  id: string;
  email: string;
  handle: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  phoneNumber: string | null;
  creationDatetime: number | null;
  lastSignInDatetime: number | null;
}
