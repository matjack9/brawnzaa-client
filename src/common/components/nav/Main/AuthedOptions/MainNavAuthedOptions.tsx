import * as React from 'react';
import { useSelector } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core';
import { selectIsLoggedIn } from 'app/authReducer';

const useStyles = makeStyles(() =>
  createStyles({
    noListStyle: { listStyleType: 'none', paddingLeft: 'unset' },
  })
);

export const MainNavAuthedOptions: React.FC = () => {
  const classes = useStyles();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return null;
  }

  return <ul className={classes.noListStyle}></ul>;
};
