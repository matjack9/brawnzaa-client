import { applyMiddleware, createStore, compose, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { __DEV__ } from 'common/utils/constants/config';
import { rootReducer, RootState } from 'app/rootReducer';

const configureStore = (preloadedState = undefined) => {
  const middlewares = [thunk];

  if (__DEV__) {
    /* eslint-disable-next-line @typescript-eslint/no-var-requires */
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];

  let composeEnhancers = compose;

  if (__DEV__) {
    /* eslint-disable-next-line @typescript-eslint/no-var-requires */
    const { composeWithDevTools } = require('redux-devtools-extension');
    composeEnhancers = composeWithDevTools;
  }

  const composedEnhancers = composeEnhancers(...enhancers);

  return createStore(
    (rootReducer as unknown) as RootState,
    preloadedState,
    composedEnhancers as StoreEnhancer<unknown, {}>
  );
};

export default configureStore;
