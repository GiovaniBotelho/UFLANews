import React from 'react';
import {FlatList, Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

/* Core - imports */
import Header from '../../core/Header';
import SearchBar from '../../core/SearchBar';
import Button from '../../core/Button';
import PublicationCard from '../../core/PublicationCard';

/* Constatns */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

/* Images */
import Logo from '../../../assets/logo.png';

const Home = props => {
  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        showLogo={
          <Image source={Logo} resizeMode={'contain'} style={{height: 50}} />
        }
        rightSide={<Icon name={'user'} size={25} />}
      />
      <SearchBar />
      <OptionsBar>
        <Button radius={0} title={'Favoritos'} />
        <Button radius={0} title={'Publicadores'} />
      </OptionsBar>
      <PublicationCard />
      <PublicationCard />
    </Container>
  );
};

const Container = styled(LinearGradient)`
  flex: 1;
`;

const OptionsBar = styled.View`
  flex-direction: row;
  margin-left: ${SPACING.medium};
  margin-right: ${SPACING.medium};
`;

export default Home;
