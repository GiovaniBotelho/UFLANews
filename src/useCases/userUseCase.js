import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const signIn = async (email, password, callback = () => {}) => {
  if (email && password) {
    console.log(email, password);
    await axios({
      method: 'POST',
      url: `http://localhost:8000/auth/login`,
      data: {
        email: email,
        password: password,
      },
    })
      .then(async response => {
        console.log('PASSANDO AQUI');
        console.log(response);
        const {access_token} = response.data;
        try {
          const value = await AsyncStorage.setItem('acces-token', access_token);
        } catch (erro) {
          console.log('Erro');
        }

        callback();
      })
      .catch(error => {
        Alert.alert('Verifique a senha e/ou usuário informado(s). ' + error);
      });
  } else {
    Alert.alert('Por favor, preencha todos os campos do formulário!');
  }
};

export const register = (
  name,
  email,
  password,
  passwordConfirm,
  callback = () => {},
) => {
  if (name && email && password && passwordConfirm) {
    if (password == passwordConfirm) {
      dataFormRegister = {
        email: email,
        password: password,
      };

      axios({
        method: 'POST',
        url: `http://localhost:8000/auth/register`,
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
    Alert.alert('Por favor, preencha todos os campos do formulário!');
  }
};
