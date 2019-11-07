import { Alert } from 'react-native';
import axios from 'axios';

export const signIn = (email, password, callback = () => {}) => {
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

export const register = (name, email, callback = () => {}) => {
    dataForm = {
        'nome': name,
        'email': email,
    }
    axios({
        method: 'POST',
        url: `http://localhost:3000/usuarios`,
        data: dataForm
    }).then(response => {
        callback();
    }).catch((error) => {
        console.log(dataForm)
        console.error(error)
    })
};