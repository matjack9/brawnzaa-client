import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import configureStore from 'app/configureStore';
import theme from 'common/styles/theme';
import { Route } from 'common/constants/routes';
import ErrorBoundary from 'common/components/wrappers/ErrorBoundary';
import Skeleton from 'common/components/views/Skeleton';
import MainRoutes from 'app/MainRoutes';

const Signup = React.lazy(() =>
  import(/* webpackChunkName: 'signup' */ 'features/signup')
);

const Login = React.lazy(() =>
  import(/* webpackChunkName: 'login' */ 'features/login')
);

const ResetPassword = React.lazy(() =>
  import(/* webpackChunkName: 'resetPassword' */ 'features/resetPassword')
);

const store = configureStore();

const App: React.FC = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <React.Suspense fallback={<Skeleton.Generic />}>
            <Router>
              <Signup path={Route.SIGN_UP} />
              <Login path={Route.LOG_IN} />
              <ResetPassword path={Route.RESET_PASSWORD} />
              <MainRoutes path="/*" />
            </Router>
          </React.Suspense>
        </>
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
);

export default App;
