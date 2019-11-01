import React, {useState} from 'react';
import {Text, Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

/* Images */
import Logo from '../../../assets/header-login.png';
import Mapa from '../../../assets/mapView.jpeg';

const Login = props => {
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  console.log(props);
  handleLogin = () => {
    setLoading(!loading);

    // props.navigation.navigate('Register');
  };

  handleChangeText = nome => {
    setNome(nome);
  };

  return (
    <>
      <FormContainer colors={['#93cae8', '#c4cccf']}>
        <Image
          style={{width: '100%', paddingTop: 0, marginTop: 0}}
          source={Mapa}
          resizeMode={'contain'}
        />
        <Image style={{width: '100%'}} source={Logo} resizeMode={'contain'} />
        <StyledView>
          <FormRow>
            <Input>
              <StyledIcon>
                <Icon name="envelope" size={25} color="#000000" />
              </StyledIcon>
              <StyledInputText
                placeholder={'E-mail'}
                value={nome}
                onChangeText={texto => handleChangeText(texto)}
              />
            </Input>
            <Input>
              <StyledIcon>
                <Icon name="lock" size={25} color="#000000" />
              </StyledIcon>
              <StyledInputText placeholder={'Senha'} />
            </Input>
          </FormRow>
          <StyledTextTouchableOpacity>
            <StyledText textDecorationLine={'underline'}>
              Esqueci a senha
            </StyledText>
          </StyledTextTouchableOpacity>
          <StyledTouchableOpacity>
            <Text>Login</Text>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity>
            <Text>Cadastrar</Text>
          </StyledTouchableOpacity>
        </StyledView>
      </FormContainer>
    </>
  );
};

/* Componentes estilizados aqui */
const FormContainer = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
`;
const StyledImages = styled.View`
  width: 100%;
  align-self: flex-start;
`;
const StyledView = styled.View`
  width: 100%;
`;

const FormRow = styled.View`
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 20;
`;

const Input = styled.View`
  padding-left: 10;
  padding-right: 10;
  padding-top: 10;
  padding-bottom: 10;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const StyledIcon = styled.View`
  width: 15%;
  align-items: center;
`;

const StyledInputText = styled.TextInput`
backgroundColor: #ffff
  padding-left: 15
  border-width: 0.5;
  border-color: #a9a9a9;
  border-radius: 30;
  flex: 1;
`;

const StyledTextTouchableOpacity = styled.TouchableOpacity`
  align-items: flex-end;
  padding-right: 10;
  height: 30px;
`;

const StyledText = styled.Text``;
//textdecorationline: underline;

const StyledTouchableOpacity = styled.TouchableOpacity`
  background: #1abef2;
  width: 50%;
  height: 40;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 5;
  margin-bottom: 5;
  border-radius: 30;
`;

export default Login;
