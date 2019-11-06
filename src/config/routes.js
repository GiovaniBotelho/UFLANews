import React from 'react';

/* Screens - import */
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPassowordScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import EditScreen from '../screens/EditScreen';

const routes = {
  Login: LoginScreen,
  Register: RegisterScreen,
  Favorites: FavoritesScreen,
  ForgotPassword: ForgotPasswordScreen,
  MyAccount: MyAccountScreen,
  Edit: EditScreen
};

export default routes;