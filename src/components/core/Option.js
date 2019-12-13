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
  width,
  first,
  handlerFunction = () => {},
}) => {
  const renderOption = () => {
    switch (type) {
      case 'like':
        return (
          <StyledOption onPress={handlerFunction} width={width} first={first}>
            <NumberOption>{value}</NumberOption>
            <Icon
              name={liked ? 'thumbs-up' : 'thumbs-o-up'}
              size={30}
              color={liked ? COLORS.like : COLORS.none}
            />
          </StyledOption>
        );
      case 'favorite':
        return (
          <StyledOption onPress={handlerFunction} width={width} first={first}>
            <NumberOption>{value}</NumberOption>
            <Icon
              name={favorite ? 'star' : 'star-o'}
              size={30}
              color={favorite ? COLORS.favorite : COLORS.none}
            />
          </StyledOption>
        );
      case 'comments':
        return (
          <StyledOption onPress={handlerFunction} width={width} first={first}>
            <NumberOption>{value}</NumberOption>
            <Icon name="comments-o" size={30} color={COLORS.none} />
          </StyledOption>
        );
      case 'share':
        return (
          <StyledOption first={first} width={width}>
            <Icon name="share-square-o" size={30} color={COLORS.none} />
          </StyledOption>
        );
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
  width: ${props => (props.width ? props.width : '100%')}
  border-top-width: ${props => (props.first ? 0 : 1)};
  flex-direction: row;
`;

const NumberOption = styled.Text`
  padding-right: ${SPACING.small};
`;

export default Option;
