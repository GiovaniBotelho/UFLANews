import React from 'react';

/* Screens - import */
import EditScreen from '../screens/EditScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PublishersScreen from '../screens/PublishersScreen';
import PublicationScreen from '../screens/PublicationScreen';
import ForgotPasswordScreen from '../screens/ForgotPassowordScreen';

const routes = {
  Login: LoginScreen,
  Register: RegisterScreen,
  Favorites: FavoritesScreen,
  ForgotPassword: ForgotPasswordScreen,
  MyAccount: MyAccountScreen,
  Edit: EditScreen,
  Publication: PublicationScreen,
  Home: HomeScreen,
  Publisher: PublishersScreen,
};

export default routes;
