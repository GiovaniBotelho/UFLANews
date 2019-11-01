import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

/* Images */
import Logo from '../../../assets/logo.png';

/* Components - import */
import Button from '../../core/Button';
import TextInput from '../../core/TextInput';
import BoxText from '../../core/BoxText';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  handleLogin = () => {
    // Aqui manipulamos o login
    setLoading(!loading);
  };

  return (
    <>
      <FormContainer colors={['#e4ecee', '#93cae8']}>
        <StyledImages>
          <Image
            source={Logo}
            style={{height: 100}}
            resizeMode={'contain'}
          />
        </StyledImages>
        <BoxText value={'Por favor, digite o seu email para enviarmos um link para você mudar sua senha.'} />
        <FormRow>
          <TextInput
            iconName={'envelope'}
            iconSize={25}
            iconColor={'#000'}
            placeholder={'E-mail'}
            value={name}
            onChangeText={setName}
          />
        </FormRow>
        <StyledButtonContainer>
          <Button title={'Enviar email'} onClick={handleLogin} />
          <Button color="#ff7144"
            title={'Cancelar'}
            onClick={() => {
              navigation.pop() 
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

export default Login;
