import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import configureStore from 'app/configureStore';
import theme from 'common/styles/theme';
import { Route } from 'common/utils/constants/routes';
import Skeleton from 'common/components/views/Skeleton';
import MainNav from 'common/components/nav/Main';
import MainFooter from 'common/components/footer/Main';
import ErrorBoundary from 'common/components/ErrorBoundary';
import NotFound from 'common/components/views/NotFound';
import Home from 'features/home/Home';
import EasterEgg from 'common/components/EasterEgg';

const store = configureStore();

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

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <>
            <CssBaseline />
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
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
