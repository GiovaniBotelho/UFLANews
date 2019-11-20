import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

/* Constants */
import CONSTANTS from '../config/constants';

export const getPublications = async (
  callback = () => {},
  loading = () => {},
) => {
  const token = await AsyncStorage.getItem('accesToken', undefined);

  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/news?_expand=publisher&_embed=likes&_embed=comments&_embed=favorites`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      console.log(response.data);
      callback(response.data);
      loading(false);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getNewsByPublisher = async (publisher, callback = () => {}) => {
  const token = await AsyncStorage.getItem('accesToken', undefined);
  console.log(publisher);
  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/news?publisherId=${publisher}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      console.log(response);
      callback(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const likeNew = async (news, callback = () => {}) => {
  const token = await AsyncStorage.getItem('accesToken', undefined);
  const user_id = await AsyncStorage.getItem('user_id', undefined);

  const data = {
    "newsId": news,
    "userId": user_id
  };

  await axios({
    method: 'POST',
    url: `${CONSTANTS.HOST}/likes`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: data,
  })
    .then(response => {
      console.log(response);
      callback(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const unlikeNew = async (news, callback = () => {}) => {
  const token = await AsyncStorage.getItem('accesToken', undefined);
  const user_id = await AsyncStorage.getItem('user_id', undefined);

  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/likes?newsId=${news}&userId=${user_id}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      axios({
        method: 'DELETE',
        url: `${CONSTANTS.HOST}/likes/${response.data.id}`,
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })
        .then(response => {
          console.log(response);
          callback(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });
};
