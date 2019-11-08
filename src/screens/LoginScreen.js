import React from 'react';
import {signIn} from '../useCases/userUseCase';

/* Presentational - imports */
import Login from '../components/presentational/Login/';

const LoginScreen = props => {
  return (
    <>
      <Login navigation={props.navigation} signIn={signIn} />
    </>
  );
};

export default LoginScreen;
