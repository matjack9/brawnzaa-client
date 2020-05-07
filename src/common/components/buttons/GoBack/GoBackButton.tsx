import * as React from 'react';
import { navigate } from '@reach/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import BackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>
  createStyles({
    icon: { marginRight: theme.spacing(1) },
    callToAction: { marginRight: theme.spacing(1) },
  })
);

export const GoBackButton: React.FC = () => {
  const classes = useStyles();
  return (
    <Button
      color="primary"
      variant="contained"
      size="large"
      onClick={() => {
        navigate(-1);
      }}
    >
      <BackIcon className={classes.icon} />
      <span className={classes.callToAction}>Go Back</span>
    </Button>
  );
};
