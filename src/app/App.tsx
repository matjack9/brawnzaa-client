import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import configureStore from 'app/configureStore';
import theme from 'common/styles/theme';
import ErrorBoundary from 'common/components/ErrorBoundary';
import MainRoutes from 'app/MainRoutes';

const store = configureStore();

const App: React.FC = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <Router>
            <MainRoutes path="/*" />
          </Router>
        </>
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
);

export default App;
