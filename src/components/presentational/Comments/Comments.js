import React from 'react';
import {FlatList, Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

/* Core - imports */
import Header from '../../core/Header';
import PublishBar from '../../core/PublishBar';
import Button from '../../core/Button';
import PublicationCard from '../../core/PublicationCard';

/* Constatns */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

import BoxText from '../../core/BoxText';

/* Images */
import Logo from '../../../assets/logo.png';

const Comments = props => {
  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        showLogo={
          <BoxText value={'Comentários'} />
        }
      />
      <PublishBar />
      <PublicationCard />
      <PublicationCard />
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
