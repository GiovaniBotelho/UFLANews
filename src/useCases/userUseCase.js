import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import bcrypt from 'react-native-bcrypt';

/* Actions */
import {Creators as UserActions} from '../store/ducks/user';

/* Constants */
import CONSTANTS from '../config/constants';

export const signIn = (email, password, callback = () => {}) => {
  return async dispatch => {
    dispatch(UserActions.login());
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
          const userInfo = jwt_decode(accessToken);
          await AsyncStorage.setItem('userId', userInfo.sub);
          dispatch(
            UserActions.loginSuccess({
              accessToken,
              userInfo,
            }),
          );
          dispatch(getUserInfo());
          callback();
        } catch (error) {
          console.log(
            'Erro ao salvar o token de acesso na memoria do dispositivo',
          );
          dispatch(UserActions.loginFailure(error));
        }
      })
      .catch(error => {
        Alert.alert(email + ' ' + password);
        Alert.alert('Verifique a senha e/ou usuário informado(s). ' + error);
      });
  };
};

export const edit = (
  name,
  email,
  password,
  passwordConfirm,
  callback = () => {},
) => {
  return (dispatch, getState) => {
    dispatch(UserActions.updateUserInfo());
    const {
      user: {user},
    } = getState();

    const {
      accessToken,
      userInfo: {sub: userId},
    } = user;

    const hash = bcrypt.hashSync(password, 10);
    console.log(password);

    if (name && email && password && passwordConfirm) {
      let reg = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]+$/;
      if (reg.test(email) === true) {
        if (password == passwordConfirm) {
          dataFormRegister = {
            email: email,
            password: hash,
            name: name,
          };

          axios({
            method: 'PATCH',
            url: `${CONSTANTS.HOST}/users/${userId}`,
            data: dataFormRegister,
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
            .then(response => {
              console.log(response);
              dispatch(UserAction.updateUserInfoSuccess());
              callback();
            })
            .catch(error => {
              dispatch(UserAction.updateUserInfoSuccess(error));
              if (error.response.data == 'Email already exists') {
                Alert.alert(
                  'Já existe um registro com esse endereço de email!',
                );
              } else if (error.response.data == 'Password is too short') {
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
            } else if (error.response.data == 'Password is too short') {
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

export const getUserInfo = (callback = () => {}) => {
  return async dispatch => {
    dispatch(UserActions.getInfo());
    const token = await AsyncStorage.getItem('accessToken', undefined);
    const userId = await AsyncStorage.getItem('userId', undefined);

    await axios({
      method: 'GET',
      url: `${CONSTANTS.HOST}/users/${userId}`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => {
        dispatch(UserActions.getInfoSuccess(response.data));
        callback(response.data);
      })
      .catch(error => {
        dispatch(UserActions.getInfoFailure(error));
      });
  };
};
