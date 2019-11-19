import React, {useState, useEffect} from 'react';
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

const _keyExtractor = publicacao => publicacao.id.toString();

const Publisher = ({navigation, getNewsByPublisher}) => {
  const [inscrito, setInscrito] = useState(true);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const publisher = navigation.getParam('publisher', undefined);

  useEffect(() => {
    getNewsByPublisher(publisher.id, setNews);
  }, []);

  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        showLogo={
          <Image source={Logo} resizeMode={'contain'} style={{height: 50}} />
        }
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
      <Info>
        <PublisherName>{publisher?.nome}</PublisherName>
        <FooterInfo>
          <PublisherSubscribers>
            {publisher?.subscriptions} inscritos
          </PublisherSubscribers>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button
              title={inscrito ? 'INSCRITO' : 'INSCREVER-SE'}
              color={inscrito ? COLORS.red : undefined}
              onClick={() => {
                setInscrito(!inscrito);
                if (inscrito) publisher.subscriptions -= 1;
                else publisher.subscriptions += 1;
              }}
            />
          )}
        </FooterInfo>
      </Info>
      <Label>Publicações</Label>
      <FlatList
        data={news}
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

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 80;
  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};
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
  font-size: 25;
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
