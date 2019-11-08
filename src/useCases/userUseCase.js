import { Alert } from 'react-native';
import axios from 'axios';

export const signIn = (email, password, callback = () => { }) => {
  axios({
    method: 'POST',
    url: `http://localhost:3000/usuarios`,
    data: {
      email: email,
      senha: password
    }
  }).then(response => {
    dispatch(userActions.USER_LOGIN_SUCCESS({
      'access-token': response.headers["access-token"],
      'client': response.headers["client"],
      'uid': response.headers["uid"]
    }));
    callback();

  }).catch((error) => {
    dispatch(userActions.USER_LOGIN_FAILURE(error))
    Alert.alert('Verifique a senha e/ou usuário informado(s). ' + error);
  })
};

export const register = (name, email, password, passwordConfirm, callback = () => { }) => {
  if ( password == passwordConfirm) {
    dataFormRegister = {
      'email': email,
      'password': password
    }

    axios({
      method: 'POST',
      url: `http://localhost:8000/auth/register`,
      data: dataFormRegister
    }).then(response => {
      /* dispatch(userActions.USER_LOGIN_SUCCESS({
        'access-token': response.access_token
      })); */

      data = {
        'nome': name,
        'email': email,
        'foto': null
      }

      let config = {
        headers: {
          'Authorization': 'Bearer ' + response.access_token
        }
      }

      axios({
        method: 'POST',
        url: `http://localhost:8000/usuarios`,
        data: data,
        config: config
      }).then(response => {
        callback();
      })

      callback()
    }).catch((error) => {
      console.error(error)
    })
  } else {
    Alert.alert('As senhas não são iguais!');
  }
};