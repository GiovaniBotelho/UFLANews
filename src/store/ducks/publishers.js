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
  unsubscribePublisherSuccess: ['infoSub'],
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
  loadingSubscribe: false,
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
const unsubscribePublisher = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingSubscribe: true,
});

const unsubscribePublisherSuccess = (state = INITIAL_STATE, action) => {
  let indexPublisher = state.publishers.findIndex(
    publisher => publisher.id === action.infoSub.publisherId,
  );
  let indexSubscription = state.publishers[
    indexPublisher
  ].subscriptions.findIndex(sub => sub.id === action.infoSub.subscriptionId);

  return {
    ...state,
    publishers: [
      ...state.publishers.slice(0, indexPublisher),
      {
        ...state.publishers[indexPublisher],
        subscriptions: [
          ...state.publishers[indexPublisher].subscriptions.slice(
            0,
            indexSubscription,
          ),
          ...state.publishers[indexPublisher].subscriptions.slice(
            indexSubscription + 1,
          ),
        ],
      },
      ...state.publishers.slice(indexPublisher + 1),
    ],
    loadingSubscribe: false,
  };
};

const unsubscribePublisherFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error,
  loadingSubscribe: false,
});

//implementar sucesso e falha
const subscribePublisher = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingSubscribe: true,
  error: '',
});

const subscribePublisherSuccess = (state = INITIAL_STATE, action) => {
  let indexPublisher = state.publishers.findIndex(
    publisher => publisher.id === action.sub.publisherId,
  );
  return {
    ...state,
    publishers: [
      ...state.publishers.slice(0, indexPublisher),
      {
        ...state.publishers[indexPublisher],
        subscriptions: [
          ...state.publishers[indexPublisher].subscriptions,
          action.sub,
        ],
      },
      ...state.publishers.slice(indexPublisher + 1),
    ],
    loadingSubscribe: false,
  };
};

const subscribePublisherFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  loadingSubscribe: false,
  error: action.error,
});

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
  [Types.UNSUBSCRIBE_PUBLISHER_SUCCESS]: unsubscribePublisherSuccess,
  [Types.UNSUBSCRIBE_PUBLISHER_FAILURE]: unsubscribePublisherFailure,

  [Types.SUBSCRIBE_PUBLISHER]: subscribePublisher,
  [Types.SUBSCRIBE_PUBLISHER_SUCCESS]: subscribePublisherSuccess,
  [Types.SUBSCRIBE_PUBLISHER_FAILURE]: subscribePublisherFailure,
});
