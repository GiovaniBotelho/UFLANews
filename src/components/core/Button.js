import React from 'react';
import styled from 'styled-components';

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
  background: ${props => (props.color ? props.color : '#1abef2')};
  height: 40;
  width: ${props => (props.width ? props.width : '50%')};
  align-items: center;
  justify-content: center;
  margin-top: 15;
  margin-bottom: 15;
  border-width: 0.5;
  border-radius: ${props =>
    props.borderRadius
      ? props.borderRadius
      : props.borderRadius === 0
      ? 0
      : 30};
`;

const StyledText = styled.Text`
  font-size: 18;
  color: #ffffff;
`;

export default Button;
