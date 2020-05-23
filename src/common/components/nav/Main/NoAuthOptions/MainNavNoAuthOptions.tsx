import * as React from 'react';
import { useSelector } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core';
import NavButton from '../../NavButton';
import { Route } from 'common/utils/constants/routes';
import { selectIsLoggedIn } from 'app/authReducer';

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

  if (isLoggedIn) {
    return null;
  }

  return (
    <ul className={classes.noListStyle}>
      <li className={classes.option}>
        <NavButton
          className={classes.action}
          variant="contained"
          color="primary"
          to={Route.SIGN_UP}
        >
          Sign Up
        </NavButton>
      </li>
      <li className={classes.option}>
        <NavButton
          className={[classes.action, classes.bolderBorder].join(' ')}
          variant="outlined"
          color="secondary"
          to={Route.LOG_IN}
        >
          Log In
        </NavButton>
      </li>
    </ul>
  );
};
