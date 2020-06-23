import { User as FirebaseUser } from 'firebase';
import { User } from 'types';
import {
  setInSessionStorage,
  removeFromSessionStorage,
  getFromSessionStorage,
} from 'common/utils/sessionStorage';
import { SessionStorageKey } from 'common/constants/sessionStorage';
import configureStore from 'app/configureStore';

export const getNormalizedFirebaseUser = (user: FirebaseUser): User => {
  if (user.email) {
    return {
      id: user.uid,
      handle: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      creationDatetime: user.metadata.creationTime
        ? new Date(user.metadata.creationTime).getTime() / 1000
        : null,
      lastSignInDatetime: user.metadata.lastSignInTime
        ? new Date(user.metadata.lastSignInTime).getTime() / 1000
        : null,
    };
  }
  throw new Error('The user is missing an email.');
};

export const setUserInSessionStorage = (user: User) =>
  setInSessionStorage(SessionStorageKey.AUTH_USER, JSON.stringify(user));

export const removeUserFromSessionStorage = () =>
  removeFromSessionStorage(SessionStorageKey.AUTH_USER);

export const getUserFromSessionStorage = () =>
  getFromSessionStorage<User>(SessionStorageKey.AUTH_USER);

export const getStateWithSessionStorageUser = () => {
  const maybeUser = getUserFromSessionStorage();
  const defaultState = configureStore().getState();
  return { ...defaultState, auth: { ...defaultState.auth, user: maybeUser } };
};
