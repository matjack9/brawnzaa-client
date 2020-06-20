import * as React from 'react';
import { useSelector } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core';
import LoadingNavButton from '../../LoadingNavButton';
import { Route } from 'common/constants/routes';
import { selectIsLoggedIn, selectIsAuthLoading } from 'app/reducers/authReducer';

const useStyles = makeStyles(theme =>
  createStyles({
    noListStyle: { listStyleType: 'none', paddingLeft: 'unset' },
    option: {
      display: 'inline',
      '&:not(:last-child)': { marginRight: theme.spacing(3) },
    },
    action: { minWidth: '7em' },
    bolderBorder: { borderWidth: '2px' },
  })
);

export const MainNavNoAuthOptions: React.FC = () => {
  const classes = useStyles();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsAuthLoading);

  if (isLoggedIn) {
    return null;
  }

  return (
    <ul className={classes.noListStyle}>
      <li className={classes.option}>
        <LoadingNavButton
          className={classes.action}
          variant="contained"
          color="primary"
          to={Route.SIGN_UP}
          isLoading={isLoading}
        >
          Sign Up
        </LoadingNavButton>
      </li>
      <li className={classes.option}>
        <LoadingNavButton
          className={[classes.action, classes.bolderBorder].join(' ')}
          variant="outlined"
          color="secondary"
          to={Route.LOG_IN}
          isLoading={isLoading}
          CircularProgressProps={{ color: 'secondary' }}
        >
          Log In
        </LoadingNavButton>
      </li>
    </ul>
  );
};
