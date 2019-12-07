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

export const getPublishersSubscriptions = async (callback = () => {}) => {
  const userId = await AsyncStorage.getItem('user_id', undefined);

  var publishers = await getPublisherInfo();

  publishers = publishers.filter(
    publisher =>
      publisher.subscriptions.filter(
        subscription => userId == subscription.userId,
      ).length,
  );

  publishers.map((item, index) => {
    item.userSubscribedId = null;
    let sub = item.subscriptions.filter(
      subscription => userId == subscription.userId,
    );
    if (sub.length) {
      item.userSubscribedId = sub[0].id;
    }
  });

  publishers.map((item, index) => {
    item.subscriptions = item.subscriptions.length;
  });

  callback(publishers);
};

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
  console.log('cheguei');
  console.log(publisherId, userId);
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
        console.log(response);
        dispatch(PublishersActions.subscribePublisherSuccess(response.data));
      })
      .catch(error => {
        dispatch(PublishersActions.subscribePublisherFailure(error));
        console.log(error);
      });
  };
};

export const unsubscribePublisher = idSubscription => {
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
        dispatch(PublishersActions.unsubscribePublisherSuccess());
      })
      .catch(error => {
        dispatch(PublishersActions.unsubscribePublisherFailure());
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
