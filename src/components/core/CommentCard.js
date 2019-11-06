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
          <BoxText value={'aaaaaaaaaaa a dawda dwd aaaaaadadaa d a daw d awd a wd awdawd ad a wda wd aw da wd a wda d awd a wd awd a wdaad aaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}></BoxText>
        </Comment>
      </UserComment>
      <Infos>
        <Text style={{fontSize: 11}}>Tempo de envio</Text>
        <LikeAll>
            <Text style={{fontSize: 8}}>Nº de likes</Text>
            <Like>
              <Icon name="thumbs-o-up" size={30} color={'#000000'} type="regular" />
            </Like>
        </LikeAll>
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
  padding-top: ${SPACING.default};
`;

const User = styled.View`
  justify-content: space-between;
  padding-left: ${SPACING.large};
  padding-right: ${SPACING.default};
  flex-direction: row;  
`;

const Comment = styled.View`
`;

const Like = styled.View`
  padding-left: ${SPACING.small};
`;

const LikeAll = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding-right: ${SPACING.medium};
`;


const IconName = styled.View`
  flex-direction: row;
`;

const Infos = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: ${SPACING.medium};
  padding-top: ${SPACING.large};
  padding-left: ${SPACING.large};
`;


export default CommentCard;
