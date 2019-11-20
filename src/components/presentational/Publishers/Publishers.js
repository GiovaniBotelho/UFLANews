import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

/* Core - imports */
import Header from '../../core/Header';
import SearchBar from '../../core/SearchBar';
import PublisherCard from '../../core/PublisherCard';

/* Constants - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

const Publishers = [
  {
    id: '1',
    name: 'Antonio Maria',
    publicacoes: 15,
    inscritos: 123,
  },
  {
    id: '2',
    name: 'Paulo Afonso',
    publicacoes: 15,
    inscritos: 15,
  },
  {
    id: '3',
    name: 'Denilson Pereira',
    publicacoes: 45,
    inscritos: 10.938,
  },
  {
    id: '4',
    name: 'Sanderson',
    publicacoes: 123,
    inscritos: 1.234,
  },
  {
    id: '5',
    name: 'Juliana Galvani',
    publicacoes: 99,
    inscritos: 0,
  },
  {
    id: '6',
    name: 'Joaquim Uchoa',
    publicacoes: 55,
    inscritos: 1,
  },
];

const _keyExtractor = publisher => publisher.id.toString();

const Publisher = ({navigation, getPublishers}) => {
  const [publishers, setPublishers] = useState([]);
  useEffect(() => {
    getPublishers(setPublishers);
  }, []);

  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        title={'Publicadores'}
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
      <SearchBar />
      <FlatList
        style={{marginTop: SPACING.medium}}
        data={publishers}
        renderItem={({item, index}) => (
          <PublisherCard publisher={item} navigation={navigation} />
        )}
        keyExtractor={_keyExtractor}
        ListFooterComponent={props => <FooterStyled />}
      />
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

export default Publisher;