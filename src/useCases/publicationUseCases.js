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
    url: `${CONSTANTS.HOST}/news?publisherId=${publisher}&_embed=likes&_embed=comments&_embed=favorites`,
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
  setColorLike = () => {},
  setIdLike = () => {},
  setLikes = () => {},
  likes
) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);
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
      setColorLike('#4c4cff');
      setIdLike(response.data.id);
      setLikes(likes + 1);
    })
    .catch(error => {
      console.log(error);
      console.log(error.response.data);
    });
};

export const unlikeNew = async (
  idLike,
  setIconLike = () => {},
  setColorLike = () => {},
  setIdLike = () => {},
  setLikes = () => {},
  likes
) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);

  await axios({
    method: 'DELETE',
    url: `${CONSTANTS.HOST}/likes/${idLike}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      setIconLike('thumbs-o-up');
      setColorLike('#000');
      setIdLike(null);
      setLikes(likes - 1);
    })
    .catch(error => {
      console.log(error);
    });
};

export const favoriteNew = async (
  publicationId,
  setIconFavorite = () => {},
  setColorFavorite = () => {},
  setIdFavorite = () => {},
  setFavorites = () => {},
  favorites
) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);
  const user_id = await AsyncStorage.getItem('user_id', undefined);

  const data = {
    newsId: publicationId,
    userId: user_id,
  };

  await axios({
    method: 'POST',
    url: `${CONSTANTS.HOST}/favorites`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: data,
  })
    .then(response => {
      setIconFavorite('star');
      setColorFavorite('#ffd700');
      setIdFavorite(response.data.id);
      setFavorites(favorites + 1);
    })
    .catch(error => {
      console.log(error);
      console.log(error.response.data);
    });
};

export const unfavoriteNew = async (
  idFavorite,
  setIconFavorite = () => {},
  setColorFavorite = () => {},
  setIdFavorite = () => {},
  setFavorites = () => {},
  favorites
) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);

  await axios({
    method: 'DELETE',
    url: `${CONSTANTS.HOST}/favorites/${idFavorite}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      setIconFavorite('star-o');
      setColorFavorite('#000');
      setIdFavorite(null);
      setFavorites(favorites - 1);
    })
    .catch(error => {
      console.log(error);
    });
};