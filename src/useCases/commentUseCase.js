import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment'

import CONSTANTS from '../config/constants';

export const deleteComment = async (
  idComment
) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);

  await axios({
    method: 'DELETE',
    url: `${CONSTANTS.HOST}/comments/${idComment}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
    })
    .catch(error => {
      console.log(error);
    });
};

export const addComment = async (
  comment,
  newsId,
  setNewComment = () => { }
) => {
  console.log("salve queridão")
  const token = await AsyncStorage.getItem('accessToken', undefined);
  const userId = await AsyncStorage.getItem('userId', undefined)

  await axios({
    method: 'POST',
    url: `${CONSTANTS.HOST}/comments`,
    data: {
      comment,
      userId,
      newsId,
      date: moment().format('DD/MM/YYYY HH:mm:ss')
    },
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      setNewComment(response.data)
    })
    .catch(error => {
      console.log(error);
    });
};