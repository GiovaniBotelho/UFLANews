import {createActions, createReducer} from 'reduxsauce';

/**
 * Criando ActionTypes e creators
 */
export const {Types, Creators} = createActions({
  getPublishers: [],
  getPublishersSuccess: ['publishers'],
  getPublishersFailure: ['error'],

  getNewsByPublisher: [],
  getNewsByPublisherSuccess: ['news'],
  getNewsByPublisherFailure: ['error'],

  unsubscribePublisher: [],
  unsubscribePublisherSuccess: [],
  unsubscribePublisherFailure: ['error'],

  subscribePublisher: [],
  subscribePublisherSuccess: ['sub'],
  subscribePublisherFailure: ['error'],
});

/**
 * Criando os reducers handlers
 */
const INITIAL_STATE = {
  publishers: [],
  isLoading: false,
  error: undefined,
  newsByPublisher: {
    isLoading: false,
    news: [],
  },
};

const getPublishers = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
});

const getPublishersSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  publishers: action.publishers,
});

const getPublishersFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  error: action.error,
});

const getNewsByPublisher = (state = INITIAL_STATE, action) => ({
  ...state,
  newsByPublisher: {
    ...state.newsByPublisher,
    isLoading: true,
    error: undefined,
  },
});

const getNewsByPublisherSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  newsByPublisher: {
    ...state.newsByPublisher,
    isLoading: false,
    news: action.news,
  },
});

const getNewsByPublisherFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  newsByPublisher: {
    ...state.newsByPublisher,
    isLoading: false,
    error: action.error,
  },
});
//implementar sucesso e falha
const unsubscribePublisher = (state = INITIAL_STATE, action) => state;

//implementar sucesso e falha
const subscribePublisher = (state = INITIAL_STATE, action) => state;

/**
 * Criando o nosso proprio reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.GET_PUBLISHERS]: getPublishers,
  [Types.GET_PUBLISHERS_SUCCESS]: getPublishersSuccess,
  [Types.GET_PUBLISHERS_FAILURE]: getPublishersFailure,

  [Types.GET_NEWS_BY_PUBLISHER]: getNewsByPublisher,
  [Types.GET_NEWS_BY_PUBLISHER_SUCCESS]: getNewsByPublisherSuccess,
  [Types.GET_NEWS_BY_PUBLISHER_FAILURE]: getNewsByPublisherFailure,

  [Types.UNSUBSCRIBE_PUBLISHER]: unsubscribePublisher,
  [Types.UNSUBSCRIBE_PUBLISHER_SUCCESS]: unsubscribePublisher,
  [Types.UNSUBSCRIBE_PUBLISHER_FAILURE]: unsubscribePublisher,

  [Types.SUBSCRIBE_PUBLISHER]: subscribePublisher,
  [Types.SUBSCRIBE_PUBLISHER_SUCCESS]: subscribePublisher,
  [Types.SUBSCRIBE_PUBLISHER_FAILURE]: subscribePublisher,
});
