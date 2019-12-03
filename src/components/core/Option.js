import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import SPACING from '../../config/spacing';
import COLORS from '../../config/colors';

const Option = ({
  type,
  liked = false,
  favorite = false,
  value = 0,
  handlerFunction = () => {},
}) => {
  const renderOption = () => {
    switch (type) {
      case 'like':
        return <StyledOption onPress={() => favorite}></StyledOption>;
      case 'favorite':
        return (
          <StyledOption onPress={handlerFunction}>
            <NumberOption>{value}</NumberOption>
            <Icon
              name={favorite ? 'star' : 'star-o'}
              size={30}
              color={favorite ? COLORS.favorite : COLORS.none}
            />
          </StyledOption>
        );
      case 'comment':
        return <StyledOption></StyledOption>;
      case 'share':
        return <StyledOption></StyledOption>;
      default:
        return <StyledOption></StyledOption>;
    }
  };

  return renderOption();
};

const StyledOption = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%
  border-top-width: ${props => (props.first ? 0 : 1)};
  flex-direction: row;
`;

const NumberOption = styled.Text`
  padding-right: ${SPACING.small};
`;

export default Option;
