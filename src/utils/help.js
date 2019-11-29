import moment from 'moment/min/moment-with-locales';
import AsyncStorage from '@react-native-community/async-storage';

export function beautifulDate(date) {
  const dateText = moment(date, 'DD-MM-YYYY hh:mm:ss', 'pt-BR');
  return dateText.startOf('minutes').fromNow();
}

export async function getUserId() {
  const userId = await AsyncStorage.getItem('userId', undefined);
  return userId;
}

export const removeAccents = value =>
  value
    .toLowerCase()
    .replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a')
    .replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
    .replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
    .replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
    .replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
    .replace(new RegExp('[Ç]', 'gi'), 'c');
