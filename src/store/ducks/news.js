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
});

/**
 * Criando os reducers handlers
 */
const INITIAL_STATE = {
  news: [],
  isLoading: false,
  error: '',
};

const getPublication = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
});

const getPublicationSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
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
  console.log(index);
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
});
