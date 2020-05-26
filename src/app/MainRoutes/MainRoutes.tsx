import * as React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Route } from 'common/utils/constants/routes';
import ErrorBoundary from 'common/components/ErrorBoundary';
import Skeleton from 'common/components/views/Skeleton';
import MainNav from 'common/components/nav/Main';
import MainFooter from 'common/components/footer/Main';
import NotFound from 'common/components/views/NotFound';
import Home from 'features/home/Home';
import EasterEgg from 'common/components/EasterEgg';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '95vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(16),
    },
  })
);

export const MainRoutes: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <MainNav />
        <EasterEgg />
        <Container component="main" className={classes.main}>
          <ErrorBoundary>
            <React.Suspense fallback={<Skeleton.Generic />}>
              <Router>
                <Home path={Route.ROOT} />
                <NotFound default />
              </Router>
            </React.Suspense>
          </ErrorBoundary>
        </Container>
      </div>
      <MainFooter />
    </>
  );
};
