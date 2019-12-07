import {combineReducers} from 'redux';

/* Reduces */
import news from './news';
import user from './user';
import comments from './comments';

export default combineReducers({
  news,
  user,
  comments,
});
