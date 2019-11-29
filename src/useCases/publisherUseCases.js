import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

/* Constants */
import CONSTANTS from '../config/constants';
import STRINGS from '../config/strings';
import COLORS from '../config/colors';

export const getPublishers = async (callback = () => { }) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);
  const userId = await AsyncStorage.getItem('userId', undefined);

  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/publishers?_embed=subscriptions&_embed=news`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {

      response.data.map((item, index) => {
        item.userSubscribedId = null;
        let sub = item.subscriptions.filter(subscription => userId == subscription.userId);
        if (sub.length){
          item.userSubscribedId = sub[0].id;
        }
      });

      response.data.map((item, index) => {
        item.subscriptions = item.subscriptions.length;
      });

      callback(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getPublishersSubscriptions = async (callback = () => { }) => {
  const userId = await AsyncStorage.getItem('user_id', undefined);

  var publishers = await getPublisherInfo(0);

  publishers = publishers.filter(
    publisher => publisher.subscriptions.filter(
      subscription => userId == subscription.userId).length
  );

  publishers.map((item, index) => {
    item.userSubscribedId = null;
    let sub = item.subscriptions.filter(subscription => userId == subscription.userId);
    if (sub.length){
      item.userSubscribedId = sub[0].id;
    }
  });

  publishers.map((item, index) => {
    item.subscriptions = item.subscriptions.length;
  });

  callback(publishers);
};

async function getPublisherInfo(idPublisher) {
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
};

export const subscribePublisher = async (
  publisherId,
  setIdSubscription = () => {},
  setButtonText = () => {},
  setButtonColor = () => {},
  setSubscribers = () => {},
  subscribers
) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);
  const userId = await AsyncStorage.getItem('userId', undefined);

  const data = {
    publisherId: publisherId,
    userId: userId,
  };

  await axios({
    method: 'POST',
    url: `${CONSTANTS.HOST}/subscriptions`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: data,
  })
    .then(response => {
      setIdSubscription(response.data.id);
      setButtonText(STRINGS.UNSUBSCRIBE);
      setButtonColor(COLORS.red);
      setSubscribers(subscribers + 1);
    })
    .catch(error => {
      console.log(error);
      console.log(error.response.data);
    });
};

export const unsubscribePublisher = async (
  idSubscription,
  setIdSubscription = () => {},
  setButtonText = () => {},
  setButtonColor = () => {},
  setSubscribers = () => {},
  subscribers
) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);

  await axios({
    method: 'DELETE',
    url: `${CONSTANTS.HOST}/subscriptions/${idSubscription}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      setIdSubscription(null);
      setButtonText(STRINGS.SUBSCRIBE);
      setButtonColor(undefined);
      setSubscribers(subscribers - 1);
    })
    .catch(error => {
      console.log(error);
    });
};