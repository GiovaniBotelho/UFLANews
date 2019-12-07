import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

/* Constants - imports */
import COLORS from '../../config/colors';
import SPACING from '../../config/spacing';

import pug from '../../assets/pug.jpg';

const PublisherCard = ({publisher, navigation}) => {
  return (
    <Container>
      <Capa
        onPress={() =>
          navigation.navigate('Publisher', {
            publisherId: publisher.id,
          })
        }>
        <Image
          source={{
            uri: publisher.cover,
          }}
          aspectRation={1}
          resizeMode={'cover'}
          style={{height: '100%', width: '100%'}}
        />
        <Info>
          <PublisherName>{publisher.nome}</PublisherName>
          <Footer>
            <PublicationsNumber>
              {publisher?.news?.length ? publisher?.news?.length : 0}
              {publisher?.news?.length > 1 ? ' publicações' : ' publicação'}
            </PublicationsNumber>
            <Subscribers>
              {publisher?.subscriptions?.length
                ? publisher?.subscriptions?.length
                : 0}
              {publisher?.subscriptions?.length > 1 ? ' incritos' : ' inscrito'}
            </Subscribers>
          </Footer>
        </Info>
      </Capa>
    </Container>
  );
};

const Container = styled.View`
  height: 150;
  background: white;
  margin-right: ${SPACING.medium};
  margin-left: ${SPACING.medium};
  margin-top: ${SPACING.small};
  margin-bottom: ${SPACING.small};
`;

const Capa = styled.TouchableOpacity`
  flex: 5;
`;

const Info = styled.View`
  background-color: white;
  height: auto;
  position: absolute;
  bottom: 0;
  opacity: 0.85;
  width: 100%;
  padding-top: ${SPACING.small};
  padding-bottom: ${SPACING.small};
  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.medium};
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const PublisherName = styled.Text`
  font-size: 17;
`;
const PublicationsNumber = styled.Text`
  font-size: 14;
`;
const Subscribers = styled.Text`
  font-size: 13;
`;

export default PublisherCard;
