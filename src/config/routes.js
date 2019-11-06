import React from 'react';

/* Screens - import */
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PublicationScreen from '../screens/PublicationScreen';
import ForgotPasswordScreen from '../screens/ForgotPassowordScreen';

const routes = {
  Login: LoginScreen,
  Register: RegisterScreen,
  ForgotPassword: ForgotPasswordScreen,
  Home: HomeScreen,
  Favorites: FavoritesScreen,
  Publication: PublicationScreen,
};

export default routes;
