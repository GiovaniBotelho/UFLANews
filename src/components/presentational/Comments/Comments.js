import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

/* Core - imports */
import Header from '../../core/Header';
import PublishBar from '../../core/PublishBar';
import CommentCard from '../../core/CommentCard';

/* Constatns */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

/* Images */
import Logo from '../../../assets/logo.png';

const Comments = props => {
  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        showLogo={
          <Text styled={{fontSize: 200}}>
            Comentários
          </Text>
        }
      />
      <PublishBar />
      <CommentCard />
      <CommentCard />
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

export default Comments;
