import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

/* Images */
import Logo from '../../../assets/logo.png';

/* Components - import */
import Header from '../../core/Header';
import Button from '../../core/Button';
import TextInput from '../../core/TextInput';
import BoxText from '../../core/BoxText';

/* Constants - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');

  handleLogin = () => {
    // Aqui manipulamos o login
    setLoading(!loading);
  };

  return (
    <>
      <FormContainer colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
        <StyledView>
          <Header
            leftSide={
              <StyledTouchableOpacity onPress={() => navigation.pop()}>
                <Icon name={'chevron-left'} size={25} />
              </StyledTouchableOpacity>
            }
            title={'Recuperar Senha'}
          />
          <BoxText
            value={
              'Por favor, digite o seu email para enviarmos um link para você mudar sua senha.'
            }
          />
          <FormRow>
            <TextInput
              iconName={'envelope'}
              iconSize={25}
              iconColor={'#000'}
              placeholder={'E-mail'}
              value={email}
              onChangeText={setEmail}
            />
          </FormRow>
          <StyledButtonContainer>
            <Button title={'Enviar email'} onClick={handleLogin} />
          </StyledButtonContainer>
        </StyledView>
      </FormContainer>
    </>
  );
};

/* Componentes estilizados aqui */
const StyledView = styled.ScrollView`
  width: 100%;
`;

const FormContainer = styled(LinearGradient)`
  flex: 1;
`;
const StyledImages = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 15;
`;

const FormRow = styled.View`
  padding-top: 70;
  padding-left: 10;
  padding-right: 10;
  height: 300;
`;

const StyledButtonContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 100;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 80;
  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};
`;

export default Login;
