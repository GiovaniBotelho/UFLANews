import React from 'react';

import Register from '../components/presentational/Register';
import {register} from '../useCases/userUseCase';

const RegisterScreen = props => {
  return (
    <>
      <Register navigation={props.navigation} register={register}/>
    </>
  );
};

export default RegisterScreen;
