import * as React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Route } from 'common/utils/constants/routes';
import ErrorBoundary from 'common/components/wrappers/ErrorBoundary';
import Skeleton from 'common/components/views/Skeleton';
import MainNav from 'common/components/nav/Main';
import MainFooter from 'common/components/footer/Main';
import NotFound from 'common/components/views/NotFound';
import Home from 'features/home';
import EasterEgg from 'common/components/misc/EasterEgg';

const Feats = React.lazy(() =>
  import(/* webpackChunkName: 'feats' */ 'features/feats')
);

const Media = React.lazy(() =>
  import(/* webpackChunkName: 'media' */ 'features/media')
);

const Events = React.lazy(() =>
  import(/* webpackChunkName: 'events' */ 'features/events')
);

const Leaderboard = React.lazy(() =>
  import(/* webpackChunkName: 'leaderboard' */ 'features/leaderboard')
);

const Help = React.lazy(() =>
  import(/* webpackChunkName: 'help' */ 'features/help')
);

const Policy = React.lazy(() =>
  import(/* webpackChunkName: 'policy' */ 'features/policy')
);

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

const WILDCARD = '/*';

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
                <Feats path={Route.FEATS + WILDCARD} />
                <Media path={Route.MEDIA + WILDCARD} />
                <Events path={Route.EVENTS + WILDCARD} />
                <Leaderboard path={Route.LEADERBOARD + WILDCARD} />
                <Help path={Route.HELP + WILDCARD} />
                <Policy path={Route.POLICY + WILDCARD} />
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
