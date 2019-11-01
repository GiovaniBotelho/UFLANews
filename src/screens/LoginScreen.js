import React from 'react';
import {View, Text} from 'react-native';

/* Presentational - imports */
import Login from '../components/presentational/Login/';

const LoginScreen = props => {
  console.log(props);
  return (
    <>
      <Login navigation={props.navigation} />
    </>
  );
};

export default LoginScreen;