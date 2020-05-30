import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import WIP from 'common/components/views/WIP';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: theme.spacing(8),
    },
  })
);

export const ResetPassword: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <WIP label="Reset Password" />
    </main>
  );
};
