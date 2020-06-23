import * as React from 'react';
import Snackbar, { SnackbarProps } from '@material-ui/core/Snackbar';
import Alert, { AlertProps } from '@material-ui/lab/Alert';

interface Props {
  handleClose?: () => void;
  SnackbarProps?: SnackbarProps;
  AlertProps?: AlertProps;
}

export const Toast: React.FC<Props> = props => {
  const { handleClose, SnackbarProps = {}, AlertProps = {}, children } = props;
  return (
    <Snackbar
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      {...SnackbarProps}
      onClose={handleClose}
    >
      <Alert variant="filled" elevation={6} {...AlertProps} onClose={handleClose}>
        {children}
      </Alert>
    </Snackbar>
  );
};
