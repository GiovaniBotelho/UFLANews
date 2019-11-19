import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {StackActions, NavigationActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

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

  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Login'})],
  });

  return (
    <>
      <FormContainer colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
        <StyledView>
          <Header
            leftSide={
              <StyledTouchableOpacity onPress={() => props.navigation.pop()}>
                <Icon name={'chevron-left'} size={25} />
              </StyledTouchableOpacity>
            }
            title={'Minha Conta'}
            rightSide={
              <StyledTouchableOpacity
                onPress={() => {
                  console.log(AsyncStorage.getItem('access-token'));
                  props.navigation.dispatch(resetAction);
                }}>
                <Icon name={'sign-out'} size={25} />
              </StyledTouchableOpacity>
            }
          />
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
  textalign: center;
  fontsize: 30px;
  padding: 20px;
  color: grey;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 80;
  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};
`;

export default MyAccount;
