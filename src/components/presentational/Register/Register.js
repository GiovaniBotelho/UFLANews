import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Register = props => {
  return (
    <StyledContainer>
      <Text>Mudei de tela</Text>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  background: #ff0;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Register;
