import React, {useState} from 'react';
import {FlatList, Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

/* Core - imports */
import Header from '../../core/Header';
import SearchBar from '../../core/SearchBar';
import Button from '../../core/Button';
import PublicationCard from '../../core/PublicationCard';

/* Constants - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

/* Images - imports */
import Logo from '../../../assets/logo.png';

const Publicacoes = [
  {
    id: '1',
    titulo: 'Titulo A',
    autor: 'Autor A',
    data: 'Data A',
    capa: 'C:UsersMauricio VieiraDesktopUFLANewssrcassetsmike.jpg',
  },
  {
    id: '2',
    titulo: 'Titulo B',
    autor: 'Autor B',
    data: 'Data B',
    capa: 'C:UsersMauricio VieiraDesktopUFLANewssrcassetspug.jpg',
  },
  {
    id: '3',
    titulo: 'Titulo C',
    autor: 'Autor C',
    data: 'Data C',
    capa: 'C:UsersMauricio VieiraDesktopUFLANewssrcassetspug.jpg',
  },
  {
    id: '4',
    titulo: 'Titulo D',
    autor: 'Autor D',
    data: 'Data D',
    capa: 'C:UsersMauricio VieiraDesktopUFLANewssrcassetspug.jpg',
  },
  {
    id: '5',
    titulo: 'Titulo E',
    autor: 'Autor E',
    data: 'Data E',
    capa: 'C:UsersMauricio VieiraDesktopUFLANewssrcassetspug.jpg',
  },
  {
    id: '6',
    titulo: 'Titulo F',
    autor: 'Autor F',
    data: 'Data F',
    capa: 'C:UsersMauricio VieiraDesktopUFLANewssrcassetspug.jpg',
  },
];

const _keyExtractor = publicacao => publicacao.id;

const _renderItem = ({item, index}) => (
  <PublicationCard publicacao={item} navigation={props.navigation} />
);

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  console.log(navigation);
  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        showLogo={
          <Image source={Logo} resizeMode={'contain'} style={{height: 50}} />
        }
        rightSide={<Icon name={'user'} size={25} onPress={() => navigation.navigate('MyAccount')}/>}
      />
      <SearchBar />
      <OptionsBar>
        <Button
          radius={0}
          title={'Favoritos'}
          onClick={() => navigation.navigate('Favorites')}
        />
        <Button radius={0} title={'Publicadores'} />
      </OptionsBar>
      {loading ? (
        <LottieView
          source={require('../../../assets/animations/353-newspaper-spinner.json')}
          style={{height: 100, width: 100, flex: 1}}
          autoPlay
          loop
        />
      ) : (
        <FlatList
          data={Publicacoes}
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

export default Home;
