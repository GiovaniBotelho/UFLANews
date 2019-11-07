import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

/* Constants - imports */
import COLORS from '../../config/colors';
import SPACING from '../../config/spacing';

import pug from '../../assets/pug.jpg';

const PublisherCard = ({publisher, navigation}) => {
  console.log('Publisher');
  console.log(publisher);
  return (
    <Container>
      <Capa
        onPress={() =>
          navigation.navigate('Publisher', {
            publisher: publisher,
          })
        }>
        <Image
          source={pug}
          aspectRation={1}
          resizeMode={'cover'}
          style={{height: '100%', width: '100%'}}
        />
        <Info>
          <PublisherName>{publisher.name}</PublisherName>
          <Footer>
            <PublicationsNumber>
              {publisher.publicacoes} publicações
            </PublicationsNumber>
            <Subscribers>{publisher.inscritos} inscritos</Subscribers>
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
  opacity: 0.7;
  width: 100%;
  padding-top: ${SPACING.small};
  padding-bottom: ${SPACING.small};
  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.small};
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
