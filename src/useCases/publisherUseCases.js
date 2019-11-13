import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

/* Constants */
import CONSTANTS from '../config/constants';

export const getPublishers = async (callback = () => {}) => {
  const token = await AsyncStorage.getItem('acces-token', undefined);
  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/publicadores`,
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
