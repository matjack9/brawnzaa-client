import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import configureStore from 'app/configureStore';
import Toaster from 'common/components/wrappers/Toaster';
import Auth from 'common/components/wrappers/Auth';
import theme from 'common/styles/theme';
import { Route } from 'common/constants/routes';
import ErrorBoundary from 'common/components/wrappers/ErrorBoundary';
import Skeleton from 'common/components/views/Skeleton';
import MainRoutes from 'app/MainRoutes';
import { getStateWithSessionStorageUser } from 'common/utils/auth';
import useConsoleArt from 'common/hooks/useConsoleArt';

const Signup = React.lazy(() =>
  import(/* webpackChunkName: 'signup' */ 'features/signup')
);

const Login = React.lazy(() =>
  import(/* webpackChunkName: 'login' */ 'features/login')
);

const ResetPassword = React.lazy(() =>
  import(/* webpackChunkName: 'reset-password' */ 'features/resetPassword')
);

const store = configureStore(getStateWithSessionStorageUser());

const App: React.FC = () => {
  useConsoleArt();
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Toaster>
          <Auth>
            <ThemeProvider theme={theme}>
              <>
                <CssBaseline />
                <React.Suspense fallback={<Skeleton.Fullscreen />}>
                  <Router>
                    <Signup path={Route.SIGN_UP} />
                    <Login path={Route.LOG_IN} />
                    <ResetPassword path={Route.RESET_PASSWORD} />
                    <MainRoutes path="/*" />
                  </Router>
                </React.Suspense>
              </>
            </ThemeProvider>
          </Auth>
        </Toaster>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
