import React, { useState, useEffect } from 'react';
import { FlatList, Image } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Lottie from 'lottie-react-native';

/* Utils - import */
import { removeAccents } from '../../../utils/help'

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
import NewsPaper from '../../../assets/animations/353-newspaper-spinner.json';
import News from '../../../assets/animations/952-news.json';


const _keyExtractor = publicacao => publicacao.id.toString();

const _renderItem = ({ item, index }) => (
  <PublicationCard publicacao={item} navigation={props.navigation} />
);

const Home = ({ navigation, getPublications }) => {
  const [loading, setLoading] = useState(true);
  const [publications, setPublications] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    getPublications(setPublications, setLoading);
  }, []);

  const handleSearch = () => {
    return removeAccents(textSearch.toUpperCase()).split(' ').reduce((acc, keyWord) => {
      return acc.filter(pub => removeAccents(pub.title.toUpperCase()).includes(keyWord))
    }, publications)
  }

  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        showLogo={
          <Image source={Logo} resizeMode={'contain'} style={{ height: 60 }} />
        }
        rightSide={
          <StyledTouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
            <Icon
              name={'user'}
              size={25}
            />
          </StyledTouchableOpacity>
        }
      />
      <SearchBar value={textSearch} setTextSearch={setTextSearch} />
      <OptionsBar>
        <Button
          radius={0}
          title={'Favoritos'}
          onClick={() => navigation.navigate('Favorites')}
        />
        <Button
          radius={0}
          title={'Publicadores'}
          onClick={() => navigation.navigate('Publishers')}
        />
      </OptionsBar>
      {loading ? (
        <StyledView>
          <Lottie
            resizeMode="cover"
            style={{ width: '100%' }}
            source={NewsPaper}
            autoPlay
            loop
          />
        </StyledView>
      ) : (
          <FlatList

            data={handleSearch()}
            renderItem={({ item, index }) => (
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
const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 80;
  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};
`;

const OptionsBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-left: ${SPACING.medium};
  margin-right: ${SPACING.medium};
`;

export default Home;
