import React, { useState } from 'react';
import { Image } from 'react-native';
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

const Edit = ({ navigation, edit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handlerEdit = () => {
    edit(name, email, password, passwordConfirm, () =>
      navigation.replace('MyAccount'),
    );
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
            title={'Editar Perfil'}
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
            <Button
              title={'SALVAR'}
              onClick={() => handlerEdit()}
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
  textalign: center;
  fontsize: 30px;
  padding: 20px;
  color: grey;
`;

const StyledPicture = styled.TouchableOpacity`
  padding: 20px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 80;
  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};
`;

export default Edit;
