import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

/* Images */
import Logo from '../../../assets/header-login.png';
import Mapa from '../../../assets/mapView.jpeg';

/* Components - import */
import Button from '../../core/Button';
import TextInput from '../../core/TextInput';
import TouchableTextWithIcon from '../../core/TouchableTextWithIcon';

const Login = props => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  handleLogin = () => {
    // Aqui manipulamos o login
    setLoading(!loading);
  };

  handleForgotPassword = () => {
    props.navigation.navigate('ForgotPassword');
  }

  return (
    <>
      <StyledImages>
        <Image
          source={Mapa}
          style={{height: 70, width: '100%'}}
          resizeMode={'cover'}
        />
        <Image
          source={Logo}
          style={{width: '100%', height: 120}}
          resizeMode={'stretch'}
        />
      </StyledImages>
      <FormContainer colors={['#e4ecee', '#93cae8']}>
        <FormRow>
          <TextInput
            iconName={'envelope'}
            iconSize={25}
            iconColor={'#000'}
            placeholder={'E-mail'}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            iconName={'lock'}
            iconSize={25}
            iconColor={'#000'}
            placeholder={'Password'}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableTextWithIcon text={'Esqueci a senha'} onClick={handleForgotPassword}/>
        </FormRow>
        <StyledButtonContainer>
          <Button title={'ENTRAR'} onClick={handleLogin} />
          <Button
            title={'CADASTRAR'}
            onClick={() => {
              console.log('Cliquei');
              props.navigation.navigate('Register');
            }}
          />
        </StyledButtonContainer>

        <TouchableTextWithIcon
          iconName={'user'}
          iconSize={20}
          text={'Minha conta'}
        />
      </FormContainer>
    </>
  );
};

/* Componentes estilizados aqui */
const FormContainer = styled(LinearGradient)`
  flex: 1;
`;
const StyledImages = styled.View`
  width: 100%;
  align-self: flex-start;
`;

const FormRow = styled.View`
  padding-top: 80;
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 20;
  height: 50%;
`;

const StyledButtonContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 40%;
`;

export default Login;
