import React from 'react';
import styled from 'styled-components';

const Button = ({title, color, onClick, radius, height}) => {
  return (
    <StyledTouchableOpacity
      onPress={onClick}
      color={color}
      borderRadius={radius}
      height={height}>
      <StyledText>{title}</StyledText>
    </StyledTouchableOpacity>
  );
};

const StyledTouchableOpacity = styled.TouchableOpacity`
  background: ${props => (props.color ? props.color : '#1abef2')};
  width: 50%;
  height: 40;
  align-items: center;
  justify-content: center;
  margin-top: 15;
  margin-bottom: 15;
  border-radius: ${props =>
    props.borderRadius
      ? props.borderRadius
      : props.borderRadius === 0
      ? 0
      : 30};
`;

const StyledText = styled.Text`
  font-size: 20;
  color: #ffffff;
`;

export default Button;
