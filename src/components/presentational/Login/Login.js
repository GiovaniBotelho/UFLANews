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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  handleLogin = () => {
    const {signIn} = props;
    signIn(email, password, () => props.navigation.navigate('Home'));
    // props.navigation.navigate('Home');
  };

  handleForgotPassword = () => {
    props.navigation.navigate('ForgotPassword');
  };

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
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            iconName={'lock'}
            iconSize={25}
            iconColor={'#000'}
            placeholder={'Password'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableTextWithIcon
            text={'Esqueci a senha'}
            onClick={handleForgotPassword}
          />
        </FormRow>
        <StyledButtonContainer>
          <Button
            title={'ENTRAR'}
            onClick={() => {
              handleLogin();
            }}
          />
          <Button
            title={'CADASTRAR'}
            onClick={() => {
              props.navigation.navigate('Register');
            }}
          />
        </StyledButtonContainer>
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
  height: 250;
`;

const StyledButtonContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 100;
`;

export default Login;
