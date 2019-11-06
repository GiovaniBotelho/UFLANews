import React from 'react';

/* Screens - import */
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ForgotPasswordScreen from '../screens/ForgotPassowordScreen';
import HomeScreen from '../screens/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen';

const routes = {
  Login: LoginScreen,
  Register: RegisterScreen,
  ForgotPassword: ForgotPasswordScreen,
  Home: HomeScreen,
  Comments: CommentsScreen,
  Favorites: FavoritesScreen
};

export default routes;
