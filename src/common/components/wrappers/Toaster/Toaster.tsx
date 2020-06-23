import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentAlert, removeAlert } from 'app/reducers/alertsReducer';
import { DEFAULT_ERROR_MESSAGE } from 'common/constants/errors';
import { AlertToToastDictionary } from './toasterConstants';

export const Toaster: React.FC = props => {
  const { children } = props;
  const dispatch = useDispatch();

  const maybeAlert = useSelector(selectCurrentAlert);

  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
    dispatch(removeAlert());
  };

  React.useEffect(() => {
    if (maybeAlert) {
      setIsOpen(true);
    }
  }, [maybeAlert, setIsOpen]);

  const MaybeToast =
    maybeAlert &&
    React.cloneElement(
      AlertToToastDictionary[maybeAlert.type],
      {
        SnackbarProps: {
          ...AlertToToastDictionary[maybeAlert.type].props.SnackbarProps,
          open: isOpen,
        },
        handleClose,
      },
      AlertToToastDictionary[maybeAlert.type].props.children ||
        maybeAlert.message ||
        DEFAULT_ERROR_MESSAGE
    );

  return (
    <>
      {children}
      {MaybeToast ? MaybeToast : null}
    </>
  );
};
