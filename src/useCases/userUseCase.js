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
        await AsyncStorage.setItem('accesToken', accessToken);
        const user = jwt_decode(accessToken);
        await AsyncStorage.setItem('user_id', user.sub);
      } catch (erro) {
        console.log(
          'Erro ao salvar o token de acesso na memoria do dispositivo',
        );
      }
      callback();
    })
    .catch(error => {
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
          name: name,
        };

        axios({
          method: 'POST',
          url: `${CONSTANTS.HOST}/register`,
          data: dataFormRegister,
        })
          .then(response => {
            callback();
          })
          .catch(error => {
            if (error.response.data == 'Email already exists') {
              Alert.alert('Já existe um registro com esse endereço de email!');
            } else if (error.response.data == 'Password is too short'){
              Alert.alert('Entre com uma senha com no mínimo 4 caracteres.');
            } else {
              console.log(error.response.data);
            }
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