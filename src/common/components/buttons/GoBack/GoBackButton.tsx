import * as React from 'react';
import { navigate } from '@reach/router';
import BackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

export const GoBackButton: React.FC = () => {
  return (
    <Button
      color="primary"
      variant="contained"
      size="large"
      onClick={() => {
        navigate(-1);
      }}
      startIcon={<BackIcon />}
      data-testid="go-back-btn"
    >
      Go Back
    </Button>
  );
};
