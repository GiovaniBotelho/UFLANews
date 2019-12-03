import {createStore, applyMiddleware, compose} from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

/* Reduces */
import reducers from './ducks';

/* init store redux */
const middleware = [reduxThunk];

if (__DEV__) {
  middleware.push(reduxLogger);
}

const store = createStore(reducers, compose(applyMiddleware(...middleware)));

export default store;
