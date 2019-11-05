import React from 'react';
import styled from 'styled-components';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Config - imports */
//import COLORS from '@config/colors';
import SPACING from '../../config/spacing';

import pug from '../../assets/pug.jpg';

const PublicationCard = ({publication}) => {
  return (
    <Container>
      <Capa>
        <Image
          source={pug}
          aspectRation={1}
          resizeMode={'cover'}
          style={{height: '100%', width: '100%'}}
        />
      </Capa>
      <Options>
        <Option first>
          <Icon
            name="share-square"
            size={25}
            color={'#000000'}
            type="regular"
          />
        </Option>
        <Option>
          <Icon name="star" size={30} color={'#000000'} type="regular" />
        </Option>
        <Option>
          <Icon name="comments" size={30} color={'#000000'} type="regular" />
        </Option>
        <Option>
          <Icon name="thumbs-up" size={30} color={'#000000'} type="regular" />
        </Option>
      </Options>
    </Container>
  );
};

const Container = styled.View`
  height: 200;
  background: white;
  margin-right: ${SPACING.medium};
  margin-left: ${SPACING.medium};
  margin-top: ${SPACING.small};
  margin-bottom: ${SPACING.small};
  flex-direction: row;
`;

const Capa = styled.View`
  flex: 5;
`;
const Options = styled.View`
  flex: 1;
  border-left-width: 1;
  align-items: center;
`;

const Option = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%
  border-top-width: ${props => (props.first ? 0 : 1)};
`;

export default PublicationCard;
