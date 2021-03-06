import React, {useState} from 'react';
import {Image, ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

/* Images */
import Logo from '../../../assets/header-login.png';
import Mapa from '../../../assets/mapView.jpeg';

/* Components - import */
import Button from '../../core/Button';
import TextInput from '../../core/TextInput';
import TouchableTextWithIcon from '../../core/TouchableTextWithIcon';

/* Constants - import */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

const Login = props => {
  const [email, setEmail] = useState('vsg@ufla.br');
  const [password, setPassword] = useState('1234');
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const {isLoading} = useSelector(({user}) => user);

  handleLogin = () => {
    const {signIn} = props;
    dispatch(signIn(email, password, () => props.navigation.replace('Home')));
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
            keyboardType={'email-address'}
            autoCapitalize={'none'}
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
          {isLoading ? (
            <Loading>
              <ActivityIndicator size="large" color={COLORS.blueButton} />
            </Loading>
          ) : (
            <Button
              title={'ENTRAR'}
              onClick={() => {
                handleLogin();
              }}
            />
          )}
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

const Loading = styled.View`
  height: 40;
  width: ${props => (props.width ? props.width : '50%')};
  align-items: center;
  justify-content: center;
  border-width: 0.5;
  border-color: ${COLORS.transparent};
  margin-top: ${SPACING.medium};
  margin-bottom: ${SPACING.medium};
  padding-top: ${SPACING.huge};
  padding-bottom: ${SPACING.huge};
`;

export default Login;
