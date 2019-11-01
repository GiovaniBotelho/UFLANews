import React, {useState} from 'react';
import {Image, ImageBackground} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

/* Images */
import Logo from '../../../assets/logo.png';


/* Components - import */
import TextInput from '../../core/TextInput';
import Button from '../../core/Button';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <>
      <FormContainer colors={['#e4ecee', '#93cae8']}>
        <StyledView>
          <StyledImages>
            <Image
              source={Logo}
              style={{height: 100}}
              resizeMode={'contain'}
            />
          </StyledImages>
          <StyledText>Cadastrar</StyledText>
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
          <StyledButtonContainer>
            <Button title={'CADASTRAR'} />
            <Button color="#ff7144"
              title={'CANCELAR'}
              onClick={() => {
                navigation.pop()
              }}
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

const StyledText = styled.Text`
  textAlign: center;
  fontSize: 30px;
  padding: 20px;
  color: grey;
`;


const StyledPicture = styled.TouchableOpacity`
  padding: 20px;
  align-items: center;
  justify-content: center;  
  align-self: center;
`;

export default Register;
