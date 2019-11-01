import React from 'react';
import styled from 'styled-components';

const Button = ({title, color, onClick}) => {
  return (
    <StyledTouchableOpacity onPress={onClick}>
      <StyledText>{title}</StyledText>
    </StyledTouchableOpacity>
  );
};

const StyledTouchableOpacity = styled.TouchableOpacity`
  background: #1abef2;
  width: 50%;
  height: 40;
  align-items: center;
  justify-content: center;
  margin-top: 15;
  margin-bottom: 15;
  border-radius: 30;
`;

const StyledText = styled.Text`
  font-size: 20;
  color: #ffffff;
`;

export default Button;
