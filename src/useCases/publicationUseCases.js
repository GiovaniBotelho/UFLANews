import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

/* Constants */
import CONSTANTS from '../config/constants';

export const getPublications = async (
  callback = () => {},
  loading = () => {},
) => {
  const token = await AsyncStorage.getItem('accesToken', undefined);

  await axios({
    method: 'GET',
    url: `${CONSTANTS.HOST}/news?_expand=publisher&_embed=likes`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => {
      console.log(response.data);
      console.log(response.data?.likes);
      callback(response.data);
      loading(false);
    })
    .catch(error => {
      console.log(error);
    });
};
