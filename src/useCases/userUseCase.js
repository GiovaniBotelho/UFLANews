import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

/* Constants */
import CONSTANTS from '../config/constants';

export const signIn = async (email, password, callback = () => {}) => {
  if (!email || !password)
    return Alert.alert('Por favor, preencha todos os campos do formulário!');
  await axios({
    method: 'POST',
    url: `${CONSTANTS.HOST}/login`,
    data: {
      email: email,
      password: password,
    },
  })
    .then(async response => {
      const {accessToken} = response.data;
      try {
        await AsyncStorage.setItem('accessToken', accessToken);
        const user = jwt_decode(accessToken);
        await AsyncStorage.setItem('user', user.sub);
        callback();
      } catch (erro) {
        console.log(
          'Erro ao salvar o token de acesso na memoria do dispositivo',
        );
      }
    })
    .catch(error => {
      Alert.alert(email + ' ' + password);
      Alert.alert('Verifique a senha e/ou usuário informado(s). ' + error);
    });
};

export const register = (
  name,
  email,
  password,
  passwordConfirm,
  callback = () => {},
) => {
  if (name && email && password && passwordConfirm) {
    let reg = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]+$/;
    if (reg.test(email) === true) {
      if (password == passwordConfirm) {
        dataFormRegister = {
          email: email,
          password: password,
        };

        axios({
          method: 'POST',
          url: `${CONSTANTS.HOST}/register`,
          data: dataFormRegister,
        })
          .then(response => {
            const headers = {
              Authorization: 'Bearer ' + response.data.access_token,
            };

            data = {
              nome: name,
              email: email,
              foto: null,
            };

            axios({
              method: 'POST',
              url: `http://localhost:8000/usuarios`,
              data: data,
              headers: headers,
            })
              .then(response => {
                callback();
              })
              .catch(e => {
                Alert.alert('Erro ao cadastrar');
              });

            callback();
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        Alert.alert('As senhas informadas não conferem!');
      }
    } else {
      Alert.alert('Por favor, informe um endereço de email válido!');
    }
  } else {
    Alert.alert('Por favor, preencha todos os campos do formulário!');
  }
};
