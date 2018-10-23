import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../src/reducers/todo';
import { loadState } from '../src/localStorage'
// import logger from 'redux-logger';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState
);

export default store;