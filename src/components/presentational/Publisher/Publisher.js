import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Image} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Core - imports */
import Header from '../../core/Header';
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

const Publisher = ({navigation}) => {
  const [inscrito, setInscrito] = useState(true);
  const [loading, setLoading] = useState(false);
  const publisher = navigation.getParam('publisher', undefined);

  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        showLogo={
          <Image source={Logo} resizeMode={'contain'} style={{height: 50}} />
        }
        rightSide={
          <Icon
            name={'user'}
            size={25}
            onPress={() => navigation.navigate('MyAccount')}
          />
        }
        leftSide={
          <Icon
            name={'chevron-left'}
            size={25}
            onPress={() => navigation.pop()}
          />
        }
      />
      <Info>
        <PublisherName>{publisher.name}</PublisherName>
        <FooterInfo>
          <PublisherSubscribers>
            {publisher.inscritos} inscritos
          </PublisherSubscribers>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button
              title={inscrito ? 'INSCRITO' : 'INSCREVER-SE'}
              color={inscrito ? COLORS.red : undefined}
              onClick={() => {
                setInscrito(!inscrito);
              }}
            />
          )}
        </FooterInfo>
      </Info>
      <Label>Publicações</Label>
      <FlatList
        data={Publicacoes}
        renderItem={({item, index}) => (
          <PublicationCard publicacao={item} navigation={navigation} />
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

const Info = styled.View`
  background-color: white;
  height: auto;
  border-radius: 20;
  margin-top: ${SPACING.medium};
  margin-left: ${SPACING.small};
  margin-right: ${SPACING.small};
  padding-left: ${SPACING.medium};
  padding-top: ${SPACING.large};
  padding-bottom: ${SPACING.medium};
  padding-right: ${SPACING.medium};
`;

const PublisherName = styled.Text`
  margin-left: ${SPACING.medium};
  margin-right: ${SPACING.medium};
  align-self: center;
  font-size: 20;
  height: 70;
`;
const FooterInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PublisherSubscribers = styled.Text`
  font-size: 15;
`;

const Label = styled.Text`
margin-top: ${SPACING.medium}
margin-bottom: ${SPACING.medium}
margin-left: ${SPACING.medium}
  font-size: 20;
`;

const FooterStyled = styled.View`
  padding-bottom: ${SPACING.medium};
`;

export default Publisher;
