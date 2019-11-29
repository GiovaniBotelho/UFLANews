import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

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