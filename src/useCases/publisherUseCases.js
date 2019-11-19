import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

/* Constants */
import CONSTANTS from '../config/constants';

export const getPublishers = async (callback = () => {}) => {
  const token = await AsyncStorage.getItem('accessToken', undefined);
  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/publishers?_embed=subscriptions&_embed=news`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      response.data.map((item, index) => {
        item.subscriptions = item.subscriptions.length;
      });
      // const {subscriptions} = response.data;
      // console.log(subscriptions);
      // response.data.subscriptions = response.data.subscriptions.length;
      // console.log(response.data);
      callback(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};
