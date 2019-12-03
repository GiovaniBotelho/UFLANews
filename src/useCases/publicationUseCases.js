import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

/* Actions */
import {Creators as NewsAction} from '../store/ducks/news';

/* Constants */
import COLORS from '../config/colors';
import CONSTANTS from '../config/constants';

/* Utils */
import {getAccesToken} from '../utils/help';

export const getPublications = () => {
  return async dispatch => {
    dispatch(NewsAction.getNews());
    const token = await AsyncStorage.getItem('accessToken', undefined);
    // const token = getAccesToken();
    axios({
      method: 'GET',
      url: `${CONSTANTS.HOST}/news?_expand=publisher&_embed=likes&_embed=comments&_embed=favorites`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => {
        dispatch(NewsAction.getNewsSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(NewsAction.getNewsFailure(error));
      });
  };
};

export const getFavoritePublications = async (
  callback = () => {},
  loading = () => {},
) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);
  const userId = await AsyncStorage.getItem('userId', undefined);

  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/news?_expand=publisher&_embed=likes&_embed=comments&_embed=favorites`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      let favoriteNews = response.data.filter(
        news => news.favorites.filter(fav => fav.userId == userId).length,
      );

      callback(favoriteNews);
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

export const likeNews = async (
  publicationId,
  setIconLike = () => {},
  setColorLike = () => {},
  setIdLike = () => {},
  setLikes = () => {},
  likes,
) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);
  const userId = await AsyncStorage.getItem('userId', undefined);

  const data = {
    newsId: publicationId,
    userId: userId,
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
      setIconLike('thumbs-up');
      setColorLike(COLORS.like);
      setIdLike(response.data.id);
      setLikes(likes + 1);
    })
    .catch(error => {
      console.log(error);
      console.log(error.response.data);
    });
};

export const unlikeNews = async (
  idLike,
  setIconLike = () => {},
  setColorLike = () => {},
  setIdLike = () => {},
  setLikes = () => {},
  likes,
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
      setColorLike(COLORS.none);
      setIdLike(null);
      setLikes(likes - 1);
    })
    .catch(error => {
      console.log(error);
    });
};

export const favoriteNews = (newsId, userId) => {
  console.log(userId);
  return async dispatch => {
    dispatch(NewsAction.setFavoriteNews());
    const token = await AsyncStorage.getItem('accessToken', undefined);
    // const userId = await AsyncStorage.getItem('userId', undefined);

    const data = {
      newsId: newsId,
      userId: userId,
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
        console.log(response.data)
        dispatch(NewsAction.setFavoriteNewsSuccess(response.data));
      })
      .catch(error => {
        dispatch(NewsAction.setFavoriteNewsFailure(error));
      });
  };
};

export const unfavoriteNews = async (
  idFavorite,
  setIconFavorite = () => {},
  setColorFavorite = () => {},
  setIdFavorite = () => {},
  setFavorites = () => {},
  favorites,
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
      setColorFavorite(COLORS.none);
      setIdFavorite(null);
      setFavorites(favorites - 1);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getCommentsByNews = async (newsId, callback = () => {}) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);

  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/comments?newsId=${newsId}&_expand=user`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      callback(response.data);
    })
    .catch(error => console.log(error));
};
