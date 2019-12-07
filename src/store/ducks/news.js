import {createActions, createReducer} from 'reduxsauce';

/**
 * Criando ActionTypes e creators
 */
export const {Types, Creators} = createActions({
  getNews: [],
  getNewsSuccess: ['news'],
  getNewsFailure: ['error'],

  setFavoriteNews: [],
  setFavoriteNewsSuccess: ['favorite'],
  setFavoriteNewsFailure: ['error'],

  removeFavoriteNews: [],
  removeFavoriteNewsSuccess: ['favorite'],
  removeFavoriteNewsFailure: ['error'],

  setLikeNews: [],
  setLikeNewsSuccess: ['like'],
  setLikeNewsFailure: ['error'],

  removeLikeNews: [],
  removeLikeNewsSuccess: ['like'],
  removeLikeNewsFailure: ['error'],

  getNewsDetails: [],
  getNewsDetailsSuccess: ['news'],
  getNewsDetailsFailure: ['error'],
});

/**
 * Criando os reducers handlers
 */
const INITIAL_STATE = {
  news: [],
  isLoading: false,
  error: '',
  newsDetails: {},
};

const getPublication = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
  newsDetails: {},
  refreshing: true,
});

const getPublicationSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  newsDetails: {},
  news: action.news,
});

const getPublicationFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  error: action.error,
});

const setFavorite = (state = INITIAL_STATE, action) => state;

const setFavoriteSuccess = (state = INITIAL_STATE, action) => {
  let index = state.news.findIndex(pub => pub.id == action.favorite.newsId);
  return {
    ...state,
    news: [
      ...state.news.slice(0, index),
      {
        ...state.news[index],
        favorites: [...state.news[index].favorites, action.favorite],
      },
      ...state.news.slice(index + 1),
    ],
  };
};

const setFavoriteFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
});

const removeFavoriteNews = (state = INITIAL_STATE, action) => state;

const removeFavoriteNewsSuccess = (state = INITIAL_STATE, action) => {
  let indexNews = state.news.findIndex(pub => pub.id == action.favorite.newsId);
  let indexFavorite = state.news[indexNews].favorites.findIndex(
    favorite => favorite.id == action.favorite.favoriteId,
  );
  return {
    ...state,
    news: [
      ...state.news.slice(0, indexNews),
      {
        ...state.news[indexNews],
        favorites: [
          ...state.news[indexNews].favorites.slice(0, indexFavorite),
          ...state.news[indexNews].favorites.slice(indexFavorite + 1),
        ],
      },
      ...state.news.slice(indexNews + 1),
    ],
  };
};

const removeFavoriteNewsFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
});

const setLike = (state = INITIAL_STATE, action) => state;

const setLikeSuccess = (state = INITIAL_STATE, action) => {
  let index = state.news.findIndex(pub => pub.id == action.like.newsId);
  return {
    ...state,
    news: [
      ...state.news.slice(0, index),
      {
        ...state.news[index],
        likes: [...state.news[index].likes, action.like],
      },
      ...state.news.slice(index + 1),
    ],
  };
};

const setLikeFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
});

const removeLikeNews = (state = INITIAL_STATE, action) => state;

const removeLikeNewsSuccess = (state = INITIAL_STATE, action) => {
  let indexNews = state.news.findIndex(pub => pub.id == action.like.newsId);
  let indexLike = state.news[indexNews].likes.findIndex(
    like => like.id == action.like.likeId,
  );
  return {
    ...state,
    news: [
      ...state.news.slice(0, indexNews),
      {
        ...state.news[indexNews],
        likes: [
          ...state.news[indexNews].likes.slice(0, indexLike),
          ...state.news[indexNews].likes.slice(indexLike + 1),
        ],
      },
      ...state.news.slice(indexNews + 1),
    ],
  };
};

const removeLikeNewsFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
});

const getNewsDetails = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
});

const getNewsDetailsSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  newsDetails: action.news,
  isLoading: false,
});

const getNewsDetailsFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
  isLoading: false,
});

/**
 * Criando o nosso proprio reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.GET_NEWS]: getPublication,
  [Types.GET_NEWS_SUCCESS]: getPublicationSuccess,
  [Types.GET_NEWS_FAILURE]: getPublicationFailure,

  [Types.SET_FAVORITE_NEWS]: setFavorite,
  [Types.SET_FAVORITE_NEWS_SUCCESS]: setFavoriteSuccess,
  [Types.SET_FAVORITE_NEWS_FAILURE]: setFavoriteFailure,

  [Types.REMOVE_FAVORITE_NEWS]: removeFavoriteNews,
  [Types.REMOVE_FAVORITE_NEWS_SUCCESS]: removeFavoriteNewsSuccess,
  [Types.REMOVE_FAVORITE_NEWS_FAILURE]: removeFavoriteNewsFailure,

  [Types.SET_LIKE_NEWS]: setLike,
  [Types.SET_LIKE_NEWS_SUCCESS]: setLikeSuccess,
  [Types.SET_LIKE_NEWS_FAILURE]: setLikeFailure,

  [Types.REMOVE_LIKE_NEWS]: removeLikeNews,
  [Types.REMOVE_LIKE_NEWS_SUCCESS]: removeLikeNewsSuccess,
  [Types.REMOVE_LIKE_NEWS_FAILURE]: removeLikeNewsFailure,

  [Types.GET_NEWS_DETAILS]: getNewsDetails,
  [Types.GET_NEWS_DETAILS_SUCCESS]: getNewsDetailsSuccess,
  [Types.GET_NEWS_DETAILS_FAILURE]: getNewsDetailsFailure,
});
