import React from 'react';
import styled from 'styled-components';

import SPACING from '../../config/spacing';
import COLORS from '../../config/colors';

const Button = ({title, color, onClick, radius, width}) => {
  return (
    <StyledTouchableOpacity
      onPress={onClick}
      color={color}
      borderRadius={radius}
      width={width}>
      <StyledText>{title}</StyledText>
    </StyledTouchableOpacity>
  );
};

const StyledTouchableOpacity = styled.TouchableOpacity`
  background: ${props => (props.color ? props.color : COLORS.blueButton)};
  height: 40;
  width: ${props => (props.width ? props.width : '50%')};
  align-items: center;
  justify-content: center;
  border-width: 0.5;
  margin-top: ${SPACING.medium};
  margin-bottom: ${SPACING.medium};
  border-radius: ${props =>
    props.borderRadius
      ? props.borderRadius
      : props.borderRadius === 0
      ? 0
      : SPACING.medium * 3};
`;

const StyledText = styled.Text`
  font-size: 18;
  color: ${COLORS.white};
`;

export default Button;
