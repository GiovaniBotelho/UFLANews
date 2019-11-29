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
import SubscriptionsScreen from '../screens/SubscriptionsScreen';
import FavoritePublicationsScreen from '../screens/FavoritePublicationsScreen';

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
  Subscriptions: SubscriptionsScreen,
  FavoritePublications: FavoritePublicationsScreen,
};

export default routes;
