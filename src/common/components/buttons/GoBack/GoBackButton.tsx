import * as React from 'react';
import { navigate } from '@reach/router';
import BackIcon from '@material-ui/icons/ArrowBack';
import Button, { ButtonProps } from '@material-ui/core/Button';

export const GoBackButton: React.FC<ButtonProps> = props => (
  <Button
    color="primary"
    variant="contained"
    size="large"
    startIcon={<BackIcon />}
    data-testid="go-back-btn"
    {...props}
    onClick={() => {
      navigate(-1);
    }}
  >
    Go Back
  </Button>
);
