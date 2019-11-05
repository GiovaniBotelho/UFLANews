import React from 'react';

/* Screens - import */
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPassowordScreen';

const routes = {
  Login: LoginScreen,
  Register: RegisterScreen,
  Favorites: FavoritesScreen,
  ForgotPassword: ForgotPasswordScreen,
};

export default routes;
