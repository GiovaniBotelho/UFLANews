import React from 'react';

/* Screens - import */
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPassowordScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import EditScreen from '../screens/EditScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PublicationScreen from '../screens/PublicationScreen';

const routes = {
  Login: LoginScreen,
  Register: RegisterScreen,
  Favorites: FavoritesScreen,
  ForgotPassword: ForgotPasswordScreen,
  MyAccount: MyAccountScreen,
  Edit: EditScreen,
  Publication: PublicationScreen,
  Home: HomeScreen
};

export default routes;