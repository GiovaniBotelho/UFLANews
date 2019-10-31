import React from 'react';
import {Text, Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../../../assets/uflaNews.png';

const Register = props => {
  return (
    <FormContainer colors={['#93cae8', '#c4cccf']}>
      <StyledView>
        <Image style={{width: '100%'}} source={Logo} resizeMode={'contain'} />
        <StyledText>Cadastrar</StyledText>
        <StyledContainer>
          <FormRow>
            <Input>
              <StyledIcon>
                <Icon name="user" size={25} color="#000000" />
              </StyledIcon>
              <StyledInputText placeholder={'Nome'}/>
            </Input>
          </FormRow>
          <FormRow>
          <Input>
            <StyledIcon>
                <Icon name="envelope" size={20} color="#000000" />
            </StyledIcon>
            <StyledInputText placeholder={'Email'}/>
          </Input>
          </FormRow>
          <FormRow>
            <Input>
              <StyledIcon>
                <Icon name="lock" size={25} color="#000000" />
              </StyledIcon>
            <StyledInputText secureTextEntry={true} placeholder={'Senha'}/>
            </Input>
          </FormRow>
          <FormRow>
          <Input>
            <StyledIcon>
              <Icon name="lock" size={25} color="#000000" />
            </StyledIcon>
          <StyledInputText secureTextEntry={true} placeholder={'Confirmação da senha'}/>
          </Input>
          </FormRow>
        </StyledContainer>
        <StyledContainer>
          <FormRow>
            <StyledButtonConfirm>
              <StyledButtonText>Cadastrar</StyledButtonText>
            </StyledButtonConfirm>
          </FormRow>
          <FormRow>
            <StyledButtonCancel>
              <StyledButtonText>Cancelar</StyledButtonText>
            </StyledButtonCancel>
          </FormRow>
        </StyledContainer>
      </StyledView>
    </FormContainer>
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

const StyledButtonConfirm = styled.TouchableOpacity`
  backgroundColor: #87CEEB;
  width: 50%;
  height: 40;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 5;
  margin-bottom: 5;
  border-radius: 30;
`;

const StyledButtonCancel = styled.TouchableOpacity`
  backgroundColor: #FF6347;
  width: 50%;
  height: 40;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 5;
  margin-bottom: 5;
  border-radius: 30;
`;

export default Register;
