import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import configureStore from 'app/configureStore';
import theme from 'common/styles/theme';
import { Routes } from 'common/utils/constants/routes';
import MainNav from 'common/components/nav/Main';
import NotFound from 'common/components/views/NotFound';
import Home from 'features/home/Home';

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
      marginBottom: theme.spacing(2),
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <div className={classes.root}>
            <MainNav />
            <Container component="main" className={classes.main}>
              <Router>
                <Home path={Routes.ROOT} />
                <NotFound default />
              </Router>
            </Container>
          </div>
        </>
      </ThemeProvider>
    </Provider>
  );
};

export default App;