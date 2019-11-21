import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

/* Constants */
import CONSTANTS from '../config/constants';

export const getPublications = async (
  callback = () => {},
  loading = () => {},
) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);

  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/news?_expand=publisher&_embed=likes&_embed=comments&_embed=favorites`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      callback(response.data);
      loading(false);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getNewsByPublisher = async (publisher, callback = () => {}) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);
  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/news?publisherId=${publisher}&_embed=likes`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      callback(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const likeNew = async (
  publicationId,
  setIconLike = () => {},
  setIdLike = () => {},
) => {
  const token = await AsyncStorage.getItem('accesToken', undefined);
  const user_id = await AsyncStorage.getItem('user_id', undefined);

  const data = {
    newsId: publicationId,
    userId: user_id,
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
      setIconLike('thumbs-up');
      setIdLike(response.data.id);
    })
    .catch(error => {
      console.log(error);
    });
};

export const unlikeNew = async (
  idLike,
  setIconLike = () => {},
  setIdLike = () => {},
) => {
  const token = await AsyncStorage.getItem('accesToken', undefined);

  await axios({
    method: 'DELETE',
    url: `${CONSTANTS.HOST}/likes/${idLike}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      console.log(response);
      setIconLike('thumbs-o-up');
      setIdLike(null);
    })
    .catch(error => {
      console.log(error);
    });
};
