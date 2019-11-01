import React, {useState} from 'react';
import {Text, Image, ImageBackground} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

/* Images */
import BackgroundHeader from '../../../assets/backgroundHeader.png';
import Logo from '../../../assets/logotipo.png';
import Background from '../../../assets/background.png';
import Background2 from '../../../assets/background2.png';

import TextInput from '../../core/TextInput';

const Register = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  handleCancel = () => {
    props.navigation.navigate('Login');
  };

  return (
    <>
      <StyledView>
        <ImageBackground style={{width: '100%'}} source={Background}>
          <ImageBackground style={{width: '100%'}} source={Background2}>
            <ImageBackground style={{width: '100%'}} source={BackgroundHeader} >
              <Image style={{width: '100%'}} source={Logo} resizeMode={'contain'} />
            </ImageBackground>
            <StyledText>Cadastrar</StyledText>
            <StyledContainer>
              <StyledPicture>
                <Icon name="user-circle" size={150} color="#000000" />
              </StyledPicture>
            </StyledContainer>
            <FormRow>
              <TextInput
                iconName={'user'}
                iconSize={25}
                iconColor={'#000'}
                placeholder={'Nome'}
                value={name}
                onChangeText={setName}
              />
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
                placeholder={'Senha'}
                value={password}
                onChangeText={setPassword}
              />
              <TextInput
                iconName={'lock'}
                iconSize={25}
                iconColor={'#000'}
                placeholder={'Confirmar senha'}
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
              />
            </FormRow>
            <StyledContainer>
                <StyledButtonConfirm>
                  <StyledButtonText>CADASTRAR</StyledButtonText>
                </StyledButtonConfirm>
                <StyledButtonCancel>
                  <StyledButtonText onPress={handleCancel}>CANCELAR</StyledButtonText>
                </StyledButtonCancel>
            </StyledContainer>
          </ImageBackground>
        </ImageBackground>
      </StyledView>
    </>
  );
};

const StyledView = styled.ScrollView`
  width: 100%;
`;

const StyledContainer = styled.View`
  padding: 20px;
`;

const FormRow = styled.View`
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 20;
`;

const FormContainer = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
`;

const StyledText = styled.Text`
  textAlign: center;
  fontSize: 40px;
  padding: 20px;
  color: grey;
`;

const Input = styled.View`
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

const StyledButtonText = styled.Text`
  color: white;
  textAlign: center;
  fontSize: 20px;
`;

const StyledPicture = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;  
  align-self: center;
`;

const StyledButtonConfirm = styled.TouchableOpacity`
  background: #1abef2;
  width: 50%;
  height: 40;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 15;
  margin-bottom: 15;
  border-radius: 30;
`;

const StyledButtonCancel = styled.TouchableOpacity`
  backgroundColor: #FF6347;
  width: 50%;
  height: 40;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 15;
  margin-bottom: 15;
  border-radius: 30;
`;

export default Register;
