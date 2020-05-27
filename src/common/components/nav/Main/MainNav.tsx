import * as React from 'react';
import { useSelector } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavButton from '../NavButton';
import NoAuthOptions from './NoAuthOptions';
import AuthedOptions from './AuthedOptions';
import { Route } from 'common/utils/constants/routes';
import { selectIsLoggedIn } from 'app/authReducer';
import brawnzaa from 'assets/logos/brawnzaa-logo.png';

const useStyles = makeStyles(theme =>
  createStyles({
    root: { backgroundColor: theme.palette.grey['800'] },
    noListStyle: { listStyleType: 'none', paddingLeft: 'unset' },
    option: {
      display: 'inline',
      '&:not(:last-child)': { marginRight: theme.spacing(3) },
    },
    grow: { flexGrow: 1 },
  })
);

export const MainNav: React.FC = () => {
  const classes = useStyles();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar className={classes.root} position="static" elevation={6}>
      <Toolbar component="nav" aria-label="Primary">
        <ul className={classes.noListStyle}>
          <li className={classes.option}>
            <NavButton color="inherit" to="/">
              <img src={brawnzaa} alt="BRAWNZAA" height="33" width="180" />
            </NavButton>
          </li>
          <li className={classes.option}>
            <NavButton color="inherit" to={Route.FEATS}>
              Feats
            </NavButton>
          </li>
          <li className={classes.option}>
            <NavButton color="inherit" to={Route.MEDIA}>
              Media
            </NavButton>
          </li>
          <li className={classes.option}>
            <NavButton color="inherit" to={Route.EVENTS}>
              Events
            </NavButton>
          </li>
          <li className={classes.option}>
            <NavButton color="inherit" to={Route.LEADERBOARD}>
              Leaderboard
            </NavButton>
          </li>
        </ul>
        <div className={classes.grow} />
        {isLoggedIn ? <AuthedOptions /> : <NoAuthOptions />}
      </Toolbar>
    </AppBar>
  );
};
