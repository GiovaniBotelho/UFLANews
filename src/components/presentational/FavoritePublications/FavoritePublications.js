import React, {useState, useEffect} from 'react';
import {FlatList, Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';

/* Core - imports */
import Header from '../../core/Header';
import SearchBar from '../../core/SearchBar';
import Button from '../../core/Button';
import PublicationCard from '../../core/PublicationCard';

/* Utils - import */
import {removeAccents} from '../../../utils/help';

/* Constants - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

/* Images */
import NewsPaper from '../../../assets/animations/353-newspaper-spinner.json';

const _keyExtractor = publicacao => publicacao.id.toString();

const _renderItem = ({item, index}) => (
  <PublicationCard publicacao={item} navigation={props.navigation} />
);

const FavoritePublications = ({navigation, getFavoritePublications}) => {
  const [textSearch, setTextSearch] = useState('');

  const dispatch = useDispatch();

  const {favoriteNews: publications, isLoading} = useSelector(({news}) => news);

  useEffect(() => {
    dispatch(getFavoritePublications());
  }, []);

  const handleSearch = () => {
    return removeAccents(textSearch.toUpperCase())
      .split(' ')
      .reduce((acc, keyWord) => {
        return acc.filter(pub =>
          removeAccents(pub.title.toUpperCase()).includes(keyWord),
        );
      }, publications);
  };

  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        title={'Publicações Favoritas'}
        rightSide={
          <StyledTouchableOpacity
            onPress={() => navigation.navigate('MyAccount')}>
            <Icon name={'user'} size={25} />
          </StyledTouchableOpacity>
        }
        leftSide={
          <StyledTouchableOpacity onPress={() => navigation.pop()}>
            <Icon name={'chevron-left'} size={25} />
          </StyledTouchableOpacity>
        }
      />

      <SearchBar value={textSearch} setTextSearch={setTextSearch} />

      {isLoading ? (
        <LottieView
          resizeMode="cover"
          style={{width: '100%'}}
          source={NewsPaper}
          autoPlay
          loop
        />
      ) : (
        <FlatList
          data={handleSearch()}
          renderItem={({item, index}) => (
            <PublicationCard publicacao={item} navigation={navigation} />
          )}
          refreshing={isLoading}
          onRefresh={() => dispatch(getFavoritePublications())}
          keyExtractor={_keyExtractor}
          ListFooterComponent={props => <FooterStyled />}
        />
      )}
    </Container>
  );
};

const Container = styled(LinearGradient)`
  flex: 1;
`;

const FooterStyled = styled.View`
  padding-bottom: ${SPACING.medium};
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 80;
  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};
`;

export default FavoritePublications;
