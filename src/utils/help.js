import moment from 'moment/min/moment-with-locales';
import AsyncStorage from '@react-native-community/async-storage';

export function beautifulDate(date) {
  const dateText = moment(date, 'DD-MM-YYYY hh:mm:ss', 'pt-BR');
  return dateText.startOf('hours').fromNow();
}

export async function getUserId() {
  const userId = await AsyncStorage.getItem('userId', undefined);
  return userId;
}
