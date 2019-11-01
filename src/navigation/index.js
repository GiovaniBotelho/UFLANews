import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/* Routes - import */
import routes from '../config/routes';

const RootNavigator = createAppContainer(
  createStackNavigator(
    routes, 
    {
      initialRouteName: 'Login',
      headerMode: 'none',
      mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
  )
)


export default RootNavigator;