import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducers from './missions/Mission';

const reducer = combineReducers({
  missions: missionsReducers,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
