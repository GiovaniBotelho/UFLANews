import React from 'react';

import Register from '../components/presentational/Register';

const RegisterScreen = props => {
  return (
    <>
      <Register navigation={props.navigation} />
    </>
  );
};

export default RegisterScreen;
