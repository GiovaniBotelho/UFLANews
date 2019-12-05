import React from 'react';

import MyAccount from '../components/presentational/MyAccount';

/* UseCases - import */
import {getUserInfo} from '../useCases/userUseCase';

const MyAccountScreen = props => {
  return <MyAccount navigation={props.navigation} getUserInfo={getUserInfo} />;
};

export default MyAccountScreen;
