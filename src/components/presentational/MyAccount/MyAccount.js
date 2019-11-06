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

const MyAccount = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
            showLogo={
              <Image source={Logo} resizeMode={'contain'} style={{height: 50}} />
            }
          />
          <StyledText>Minha Conta</StyledText>
          <StyledImages>
            <Icon name="user-circle" size={150} color="#000000" />
          </StyledImages>
          <FormRow>
            <TextInput
              iconName={'user'}
              iconSize={25}
              iconColor={'#000'}
              placeholder={'Nome'}
              value={name}
              editable={false}
            />
            <TextInput
              iconName={'envelope'}
              iconSize={25}
              iconColor={'#000'}
              placeholder={'E-mail'}
              value={email}
              editable={false}
            />
          </FormRow>
          <StyledButtonContainer>
            <Button 
              title={'EDITAR'}
              onClick={() => {
                props.navigation.navigate('Edit');
              }}
            />
          </StyledButtonContainer>
        </StyledView>
      </FormContainer>
    </>
  );
};

const StyledView = styled.View`
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
  padding-bottom: 10;
  padding-top: 10;
`;

const StyledText = styled.Text`
  textAlign: center;
  fontSize: 30px;
  padding: 20px;
  color: grey;
`;


export default MyAccount;
