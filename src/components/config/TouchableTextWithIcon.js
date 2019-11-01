import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const TouchableTextWithIcon = props => {
  const {iconName, iconSize, iconColor, underline, text} = props;
  return (
    <StyledTextTouchableOpacity>
      {iconName ? (
        <StyledIcon>
          <Icon name={iconName} size={iconSize} color={iconColor} />
        </StyledIcon>
      ) : (
        undefined
      )}
      <StyledText>{text}</StyledText>
    </StyledTextTouchableOpacity>
  );
};

const StyledText = styled.Text`
  textDecorationLine: underline;
`;

const StyledTextTouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 30px;
  flex-direction: row;
`;

const StyledIcon = styled.View`
  width: 15%;
  align-items: center
`;

export default TouchableTextWithIcon;
