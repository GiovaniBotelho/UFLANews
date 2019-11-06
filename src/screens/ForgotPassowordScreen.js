import React from 'react';

/* Presentational - imports */
import ForgotPassword from '../components/presentational/ForgotPassword';

const ForgotPasswordScreen = props => {
  return (
    <>
      <ForgotPassword navigation={props.navigation} />
    </>
  );
};

export default ForgotPasswordScreen;
