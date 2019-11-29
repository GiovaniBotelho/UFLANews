import React, {useState, useEffect} from 'react';
import {FlatList, Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

/* Core - imports */FavoritePublications
import Header from '../../core/Header';
import SearchBar from '../../core/SearchBar';
import Button from '../../core/Button';
import PublicationCard from '../../core/PublicationCard';

/* Constants - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';


const _keyExtractor = publicacao => publicacao.id;

const _renderItem = ({item, index}) => (
  <PublicationCard publicacao={item} navigation={props.navigation} />
);

const FavoritePublications = ({navigation, getFavoritePublications}) => {
  const [loading, setLoading] = useState(false);
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    getFavoritePublications(setPublications, setLoading);
  }, []);

  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        title={'Publicações Favoritas'}
        rightSide={<Icon name={'user'} size={25} onPress={() => navigation.navigate('MyAccount')}/>}
        leftSide={
            <Icon
                name={'chevron-left'}
                size={25}
                onPress={() => navigation.pop()}
            />
        }
      />
      <SearchBar />

      {loading ? (
        <LottieView
          source={require('../../../assets/animations/353-newspaper-spinner.json')}
          style={{height: 100, width: 100, flex: 1}}
          autoPlay
          loop
        />
      ) : (
        <FlatList
          data={publications}
          renderItem={({item, index}) => (
            <PublicationCard publicacao={item} navigation={navigation} />
          )}
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
const OptionsBar = styled.View`
  flex-direction: row;
  margin-left: ${SPACING.medium};
  margin-right: ${SPACING.medium};
`;

export default FavoritePublications;
