import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Text} from 'react-native';

/* Config - imports */
//import COLORS from '@config/colors';
import SPACING from '../../config/spacing';

const CommentCard = ({comment}) => {
  return (
    <Container>
      <UserComment>
        <User>
          <IconName>
            <Icon name={'user'} size={15} />
            <Text>&nbsp; {comment.usuario}</Text>
          </IconName>
          <Icon name={'times'} size={15} />
        </User>
        <Comment>
          <TextComment>{comment.comentario}</TextComment>
        </Comment>
      </UserComment>
      <Infos>
        <TextTime>{comment.tempoEnvio}</TextTime>
        <LikeAll>
          <TextLike>{comment.curtidas}</TextLike>
          <Like>
            <Icon
              name="thumbs-o-up"
              size={30}
              color={'#000000'}
              type="regular"
            />
          </Like>
        </LikeAll>
      </Infos>
    </Container>
  );
};

const TextTime = styled.Text`
  font-size: 11;
`;

const TextLike = styled.Text`
  font-size: 10;
`;

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
  padding-top: ${SPACING.small};
  padding-left: ${SPACING.large};
`;

const TextComment = styled.Text``;

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
  padding-top: ${SPACING.small};
  padding-left: ${SPACING.large};
`;

export default CommentCard;
