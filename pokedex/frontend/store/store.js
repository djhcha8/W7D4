import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk.js'

export default (state = {}) => {
  return createStore(
    rootReducer,
    state,
    applyMiddleware(thunk, logger)
  );
};
