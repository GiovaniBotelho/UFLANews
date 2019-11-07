import React from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Core - imports */
import Header from '../../core/Header';
import PublishBar from '../../core/PublishBar';
import CommentCard from '../../core/CommentCard';

/* Constatns */
import COLORS from '../../../config/colors';

const Comments = props => {
  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        leftSide={
          <Icon name={'chevron-left'} size={25} 
            onPress={() => {
              props.navigation.pop()
          }}/>
        }
        showLogo={
          <TextComment>
            Comentários
          </TextComment>
        }
      />
      <StyledView>
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />        
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />        
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />        
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </StyledView>
      <PublishBar />
    </Container>
  );
};

const TextComment = styled.Text`
  font-size: 28}
`;

const Container = styled(LinearGradient)`
  flex: 1;
`;

const StyledView = styled.ScrollView`
  width: 100%;
`;

export default Comments;
