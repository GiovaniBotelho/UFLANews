import React, {useState} from 'react';
import {View, TextInput, Button, ActivityIndicator} from 'react-native';
import styled from 'styled-components';

const Login = props => {
  const [nome, setNome] = useState('GG');
  const [loading, setLoading] = useState(true);

  console.log(props);
  handleLogin = () => {
    console.log(loading);
    setLoading(!loading);

    // props.navigation.navigate('Register');
  };

  handleChangeText = nome => {
    setNome(nome);
    console.log(nome);
  };

  return (
    <View>
      <StyledContainer>
        <StyledInputText
          placeholder={'email'}
          value={nome}
          onChangeText={texto => handleChangeText(texto)}
        />
        <StyledInputText2 placeholder={'senha'} />
      </StyledContainer>
      <Button title={nome} onPress={() => handleLogin()}>
        Teste
      </Button>
      <ActivityIndicator color={'green'} size={'large'} animating={!loading} />
    </View>
  );
};

/* Componentes estilizados aqui */
const StyledInputText = styled.TextInput`
  border-width: 1;
  border-color: #000;
  border-radius: 30;
  flex: 1;
`;
const StyledInputText2 = styled.TextInput`
  border-width: 1;
  border-color: #000;
  border-radius: 30;
  flex: 4;
`;

const StyledContainer = styled.View`
  flex-direction: row
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 10;
`;

export default Login;
