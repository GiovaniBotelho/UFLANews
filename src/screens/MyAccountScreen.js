import React from 'react';

import MyAccount from '../components/presentational/MyAccount';

const MyAccountScreen = props => {
  return (
    <>
      <MyAccount navigation={props.navigation} />
    </>
  );
};

export default MyAccountScreen;
