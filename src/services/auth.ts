import firebase from 'services/firebase';
import { getNormalizedFirebaseUser } from 'common/utils/auth';

export const loginToServerWithEmailAndPassword = async (
  email: string,
  password: string,
  isRemembering: boolean
) => {
  if (isRemembering) {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  } else {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  }

  const { user: maybeUser } = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  if (maybeUser) {
    return getNormalizedFirebaseUser(maybeUser);
  }
  return null;
};

export const logoutFromServer = () => firebase.auth().signOut();

// TODO: sanitize & validate on form and through cloud functions
export const createUser = async (email: string, password: string) => {
  const { user: maybeUser } = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  if (maybeUser) {
    return getNormalizedFirebaseUser(maybeUser);
  }
  return null;
};

// TODO: sanitize & validate on form and through cloud functions
export const updateProfile = (
  attrs: Partial<{
    displayName: string;
    photoURL: string;
  }>
) => {
  const maybeUser = firebase.auth().currentUser;
  if (maybeUser) {
    return maybeUser.updateProfile(attrs);
  }
  return Promise.reject('There is no currently authenticated user to update.');
};
