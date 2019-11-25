import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from '';
import ReduxThunk from 'redux-thunk';
import { loggerMiddleware } from './middleware/loggerMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk),
  applyMiddleware(loggerMiddleware)
);

const store = createStore(enhancer);

export default store;
