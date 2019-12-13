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

export const getFavoritePublications = () => {
  return (dispatch, getState) => {
    dispatch(NewsAction.getFavoriteNews());
    const {
      user: {user},
    } = getState();
    //Obtendo usuario e accessToken
    const {
      accessToken,
      userInfo: {sub: userId},
    } = user;

    axios({
      method: 'GET',
      url: `${CONSTANTS.HOST}/news?_expand=publisher&_embed=likes&_embed=comments&_embed=favorites`,
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })
      .then(response => {
        const news = response.data.filter(
          publication =>
            publication.favorites.findIndex(fav => fav.userId == userId) > -1,
        );
        dispatch(NewsAction.getFavoriteNewsSuccess(news));
      })
      .catch(error => {
        dispatch(NewsAction.getFavoriteNewsFailure(error));
      });
  };
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

export const likeNews = (newsId, userId) => {
  return async dispatch => {
    dispatch(NewsAction.setLikeNews());
    const token = await AsyncStorage.getItem('accessToken', undefined);
    //const userId = await AsyncStorage.getItem('userId', undefined);

    const data = {
      newsId,
      userId,
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
        dispatch(NewsAction.setLikeNewsSuccess(response.data));
      })
      .catch(error => {
        dispatch(NewsAction.setLikeNewsFailure(error));
      });
  };
};

export const unlikeNews = like => {
  return async dispatch => {
    dispatch(NewsAction.removeLikeNews());
    const token = await AsyncStorage.getItem('accessToken', undefined);

    await axios({
      method: 'DELETE',
      url: `${CONSTANTS.HOST}/likes/${like.id}`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => {
        dispatch(
          NewsAction.removeLikeNewsSuccess({
            likeId: like?.id,
            newsId: like?.newsId,
          }),
        );
      })
      .catch(error => {
        dispatch(NewsAction.removeLikeNewsFailure(error));
      });
  };
};

export const favoriteNews = (newsId, userId) => {
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
        //console.log(response.data);
        dispatch(NewsAction.setFavoriteNewsSuccess(response.data));
      })
      .catch(error => {
        dispatch(NewsAction.setFavoriteNewsFailure(error));
      });
  };
};

export const unfavoriteNews = favorite => {
  return async (dispatch, getState) => {
    dispatch(NewsAction.removeFavoriteNews());
    const token = await AsyncStorage.getItem('accessToken', undefined);

    await axios({
      method: 'DELETE',
      url: `${CONSTANTS.HOST}/favorites/${favorite.id}`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => {
        dispatch(
          NewsAction.removeFavoriteNewsSuccess({
            favoriteId: favorite?.id,
            newsId: favorite?.newsId,
          }),
        );
      })
      .catch(error => {
        //console.log(error);
        dispatch(NewsAction.removeFavoriteNewsFailure(error));
      });
  };
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

export const getNewsDetails = newsId => {
  return async dispatch => {
    dispatch(NewsAction.getNewsDetails());
    const token = await AsyncStorage.getItem('accessToken', undefined);

    await axios({
      method: 'GET',
      url: `${CONSTANTS.HOST}/news/${newsId}?_expand=publisher&_embed=likes&_embed=comments&_embed=favorites`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => {
        dispatch(NewsAction.getNewsDetailsSuccess(response.data));
      })
      .catch(error => dispatch(NewsAction.getNewsDetailsFailure(error)));
  };
};
