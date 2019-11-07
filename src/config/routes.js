/* Screens - import */
import EditScreen from '../screens/EditScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import PublisherScreen from '../screens/PublisherScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PublishersScreen from '../screens/PublishersScreen';
import PublicationScreen from '../screens/PublicationScreen';
import ForgotPasswordScreen from '../screens/ForgotPassowordScreen';
import CommentsScreen from '../screens/CommentsScreen';

const routes = {
  Home: HomeScreen,
  Edit: EditScreen,
  Login: LoginScreen,
  Comments: CommentsScreen,
  Register: RegisterScreen,
  Favorites: FavoritesScreen,
  Publisher: PublisherScreen,
  Favorites: FavoritesScreen,
  MyAccount: MyAccountScreen,
  Publishers: PublishersScreen,
  Publication: PublicationScreen,
  ForgotPassword: ForgotPasswordScreen,
};

export default routes;
