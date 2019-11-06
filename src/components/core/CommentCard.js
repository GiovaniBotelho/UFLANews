import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Text} from 'react-native'

/* Config - imports */
//import COLORS from '@config/colors';
import SPACING from '../../config/spacing';
import BoxText from './BoxText';

const CommentCard = () => {
  return (
    <Container>
      <UserComment>
        <User>
          <IconName>
            <Icon name={'user'} size={15} />
            <Text>&nbsp; Nome do usuário:</Text>
          </IconName>
          <Icon name={'times'} size={15} />
        </User>
        <Comment>
          <BoxText value={'aaaaaaaaaaa a dawda dwd aaaaaaad aaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}></BoxText>
        </Comment>
      </UserComment>
      <Infos>
        <Text>Tempo de envio</Text>
        <NumberLike>
          <Text>Nº de likes</Text>
        </NumberLike>
        <Like>
          <Icon name="thumbs-o-up" size={30} color={'#000000'} type="regular" />
        </Like>
      </Infos>
    </Container>
  );
};

const Container = styled.View`
  border-width: 1;
  background: white;
  margin-right: ${SPACING.medium};
  margin-left: ${SPACING.medium};
  margin-top: ${SPACING.small};
  margin-bottom: ${SPACING.small};
`;

const UserComment = styled.View`
  padding-top: 10;
`;

const User = styled.View`
  justify-content: space-between;
  padding-left: 30;
  padding-right: 10;
  flex-direction: row;
`;

const Comment = styled.View`
`;

const IconName = styled.View`
  flex-direction: row;
`;

const Infos = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
  padding-bottom: 15;
  padding-top: 20;
  padding-left: 20;
`;

const Like = styled.View`
  flex: 1;
`;
const NumberLike = styled.View`
  flex: 3;
  align-items: baseline;
  padding-left: 30;
`;


export default CommentCard;
