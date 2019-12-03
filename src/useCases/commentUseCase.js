import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

/* Actions */
import {Creators as CommentsAction} from '../store/ducks/comments';

import CONSTANTS from '../config/constants';

export const getCommentsByNews = newsId => {
  return async dispatch => {
    dispatch(CommentsAction.getComments());
    const token = await AsyncStorage.getItem('accessToken', undefined);

    await axios({
      method: 'GET',
      url: `${CONSTANTS.HOST}/comments?newsId=${newsId}&_expand=user`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => {
        dispatch(CommentsAction.getCommentsSuccess(response.data));
      })
      .catch(error => {
        dispatch(CommentsAction.getCommentsFailure(error));
      });
  };
};

export const deleteComment = idComment => {
  return async dispatch => {
    dispatch(CommentsAction.removeComment())
    const token = await AsyncStorage.getItem('accessToken', undefined);
    
    await axios({
      method: 'DELETE',
      url: `${CONSTANTS.HOST}/comments/${idComment}`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then(response => {
      dispatch(CommentsAction.removeCommentSuccess(idComment))
    })
    .catch(error => {
      dispatch(CommentsAction.removeCommentFailure(error))
    });
  }
};

export const addComment = (comment, newsId) => {
  return async dispatch => {
    dispatch(CommentsAction.addComment());
    const token = await AsyncStorage.getItem('accessToken', undefined);
    const userId = await AsyncStorage.getItem('userId', undefined);

    await axios({
      method: 'POST',
      url: `${CONSTANTS.HOST}/comments`,
      data: {
        comment,
        userId,
        newsId,
        date: moment().format('DD/MM/YYYY HH:mm:ss'),
      },
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => {
        dispatch(CommentsAction.addCommentSuccess(response.data));
      })
      .catch(error => {
        dispatch(CommentsAction.addCommentFailure(error));
      });
  };
};
