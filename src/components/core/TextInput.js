import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

const TextInput = ({
  iconName,
  iconSize,
  iconColor,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  editable,
  autoCapitalize,
}) => {
  return (
    <Container>
      <StyledIcon>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </StyledIcon>
      <StyledInputText
        placeholder={placeholder}
        value={value}
        onChangeText={texto => onChangeText(texto)}
        secureTextEntry={secureTextEntry}
        editable={editable}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
    </Container>
  );
};

const Container = styled.View`
  padding-left: 10;
  padding-right: 10;
  padding-top: 10;
  padding-bottom: 10;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled.View`
  width: 15%;
  align-items: center;
  justify-content: center;
`;

const StyledInputText = styled.TextInput`
  backgroundColor: #ffff
  padding-left: 15
  border-width: 0.5;
  border-color: #a9a9a9;
  border-radius: 30;
  flex: 1;
  height: 50;
`;

export default TextInput;
