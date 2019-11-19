import moment from 'moment/min/moment-with-locales';

export function beautifulDate(date) {
  const dateText = moment(date, 'DD-MM-YYYY hh:mm:ss', 'pt-BR');
  return dateText.startOf('hours').fromNow();
}
