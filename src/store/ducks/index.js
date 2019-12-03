import {combineReducers} from 'redux';

/* Reduces */
import news from './news';
import user from './user';

export default combineReducers({
  news,
  user
});
