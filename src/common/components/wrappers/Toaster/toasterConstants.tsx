import * as React from 'react';
import { LOGIN_USER_FAILURE, LOGOUT_USER } from 'app/reducers/authReducer';
import { alertTypes } from 'app/reducers/alertsReducer';
import Toast from 'common/components/feedback/Toast';

export const AlertToToastDictionary: Record<
  typeof alertTypes[number],
  React.ReactElement
> = Object.freeze({
  [LOGIN_USER_FAILURE]: (
    <Toast AlertProps={{ severity: 'error' }}>
      You entered an incorrect email or password.
    </Toast>
  ),
  [LOGOUT_USER]: (
    <Toast AlertProps={{ severity: 'success' }}>
      You have successfully logged out.
    </Toast>
  ),
});
