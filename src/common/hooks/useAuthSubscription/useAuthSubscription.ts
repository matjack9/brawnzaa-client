import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'services/firebase';
import {
  setLoginPending,
  setLoginSuccess,
  setLoginFailure,
  setLoginNoLongerPending,
  setLogout,
  selectIsLoggedIn,
} from 'app/reducers/authReducer';
import { getNormalizedFirebaseUser } from 'common/utils/auth';

export const useAuthSubscription = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedInRef = React.useRef<boolean>(isLoggedIn);

  React.useEffect(() => {
    isLoggedInRef.current = isLoggedIn;
  }, [isLoggedIn]);

  React.useEffect(() => {
    dispatch(setLoginPending());

    const unsubscribe = firebase.auth().onAuthStateChanged(
      maybeUser => {
        if (maybeUser) {
          const user = getNormalizedFirebaseUser(maybeUser);
          dispatch(setLoginSuccess(user));
        } else if (isLoggedInRef.current) {
          dispatch(setLogout());
        } else {
          dispatch(setLoginNoLongerPending());
        }
      },
      error => {
        dispatch(setLoginFailure(error.message));
      }
    );

    return unsubscribe;
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
};
