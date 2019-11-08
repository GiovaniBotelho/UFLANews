import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

/* Images */
import Logo from '../../../assets/logo.png';


/* Components - import */
import Header from '../../core/Header';
import TextInput from '../../core/TextInput';
import Button from '../../core/Button';

/* Constants - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';


const Register = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const register = () => {
    const {register} = props;
    register(name, email, password, passwordConfirm, () => props.navigation.replace('Login'));
  };

  return (
    <>
      <FormContainer colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
        <StyledView>
          <Header
            leftSide={
            <Icon name={'chevron-left'} size={25} 
              onPress={() => {
                props.navigation.pop()
              }}/>
            }
            title={'Cadastrar'}
          />
          <StyledPicture>
            <Icon name="user-circle" size={150} color="#000000" />
          </StyledPicture>
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
              secureTextEntry={true}
            />
            <TextInput
              iconName={'lock'}
              iconSize={25}
              iconColor={'#000'}
              placeholder={'Confirmar senha'}
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
              secureTextEntry={true}
            />
          </FormRow>
          <StyledButtonContainer>
            <Button title={'CADASTRAR'} 
              onClick={() => register()}
            />
          </StyledButtonContainer>
        </StyledView>
      </FormContainer>
    </>
  );
};

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

const StyledButtonContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 100;
`;

const FormRow = styled.View`
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 20;
`;

const StyledPicture = styled.TouchableOpacity`
  padding: 20px;
  align-items: center;
  justify-content: center;  
  align-self: center;
`;

export default Register;
