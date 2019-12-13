import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

/* Constants */
import CONSTANTS from '../config/constants';
import STRINGS from '../config/strings';
import COLORS from '../config/colors';
import {dispatch} from 'rxjs/internal/observable/range';

/* Actions */
import {Creators as PublishersActions} from '../store/ducks/publishers';

export const getPublishers = () => {
  return (dispatch, getState) => {
    dispatch(PublishersActions.getPublishers());
    const {
      user: {user},
    } = getState();

    const {
      accessToken,
      userInfo: {sub: userId},
    } = user;

    axios({
      method: 'GET',
      url: `${CONSTANTS.HOST}/publishers?_embed=subscriptions&_embed=news`,
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })
      .then(response => {
        dispatch(PublishersActions.getPublishersSuccess(response.data));
      })
      .catch(error => {
        dispatch(PublishersActions.getPublishersFailure(error));
      });
  };
};

//mexer nessa função
export const getPublishersSubscriptions = () => {
  return (dispatch, getState) => {
    dispatch(PublishersActions.getFavoritePublishers());
    const {
      user: {user},
    } = getState();

    const {
      accessToken,
      userInfo: {sub: userId},
    } = user;

    axios({
      method: 'GET',
      url: `${CONSTANTS.HOST}/publishers?_embed=subscriptions&_embed=news`,
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })
      .then(response => {
        const publishers = response.data.filter(
          publisher =>
            publisher.subscriptions.findIndex(sub => sub.userId == userId) > -1,
        );
        dispatch(PublishersActions.getFavoritePublishersSuccess(publishers));
      })
      .catch(error => {
        dispatch(PublishersActions.getFavoritePublishersFailure(error));
      });
  };
};

//acho que vai precisar excluir essa
async function getPublisherInfo() {
  const token = await AsyncStorage.getItem('accessToken', undefined);
  publishers = null;
  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/publishers?_embed=subscriptions&_embed=news`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      publishers = response.data;
    })
    .catch(error => {
      console.log(error);
    });
  return publishers;
}

export const subscribePublisher = (publisherId, userId) => {
  return (dispatch, getState) => {
    dispatch(PublishersActions.subscribePublisher());
    const {
      user: {user},
    } = getState();

    const {accessToken} = user;

    axios({
      method: 'POST',
      url: `${CONSTANTS.HOST}/subscriptions`,
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
      data: {
        publisherId,
        userId,
      },
    })
      .then(response => {
        dispatch(PublishersActions.subscribePublisherSuccess(response.data));
      })
      .catch(error => {
        dispatch(PublishersActions.subscribePublisherFailure(error));
      });
  };
};

export const unsubscribePublisher = (idSubscription, publisherId) => {
  return (dispatch, getState) => {
    dispatch(PublishersActions.unsubscribePublisher());
    const {
      user: {user},
    } = getState();

    const {accessToken} = user;

    axios({
      method: 'DELETE',
      url: `${CONSTANTS.HOST}/subscriptions/${idSubscription}`,
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })
      .then(response => {
        console.log(response);
        dispatch(
          PublishersActions.unsubscribePublisherSuccess({
            publisherId,
            subscriptionId: idSubscription,
          }),
        );
      })
      .catch(error => {
        dispatch(PublishersActions.unsubscribePublisherFailure(error));
      });
  };
};

export const getNewsByPublisher = (publisher, callback = () => {}) => {
  return (dispatch, getState) => {
    dispatch(PublishersActions.getNewsByPublisher());
    const {
      user: {user},
    } = getState();

    const {accessToken} = user;

    axios({
      method: 'GET',
      url: `${CONSTANTS.HOST}/news?publisherId=${publisher}&_embed=likes&_embed=comments&_embed=favorites`,
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    })
      .then(response => {
        callback(response.data);
        dispatch(PublishersActions.getNewsByPublisherSuccess(response.data));
      })
      .catch(error => {
        dispatch(PublishersActions.getNewsByPublisherFailure(error));
      });
  };
};
