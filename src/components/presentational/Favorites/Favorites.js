import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

/* Core - imports */
import TouchableTextWithIcon from '../../core/TouchableTextWithIcon';
import Header from '../../core/Header';
import Button from '../../core/Button';

/* Constants */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

/* Images */
import Logo from '../../../assets/logo.png';

const Favorites = props => {
  handleCancel = () => {
    props.navigation.navigate('Login');
  };

  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        showLogo={
          <Image source={Logo} resizeMode={'contain'} style={{height: 50}} />
        }
        rightSide={<Icon name={'user'} size={25} />}
        leftSide={
          <Icon
            name={'chevron-left'}
            size={25}
            onPress={() => props.navigation.pop()}
          />
        }
      />
      <StyledText>Favoritos</StyledText>
      <StyledView>
        <StyledContainer>
          <FormRow>
            <StyledButtonFavoritePublications>
              <StyledButtonText>Publicações Favoritas</StyledButtonText>
            </StyledButtonFavoritePublications>
          </FormRow>
          <FormRow>
            <StyledButtonRegistrations>
              <StyledButtonText>Minhas Inscrições</StyledButtonText>
            </StyledButtonRegistrations>
          </FormRow>
        </StyledContainer>
      </StyledView>
    </Container>
  );
};

/* Componentes estilizados aqui */
const Container = styled(LinearGradient)`
  flex: 1;
`;

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

const StyledText = styled.Text`
  text-align: center;
  font-size: 40px;
  padding: 20px;
  color: grey;
  margin-top: 40;
`;

const StyledButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 25px;
  width: 100%;
`;

const StyledButtonFavoritePublications = styled.TouchableOpacity`
  background-color: #1abef2;
  width: 90%;
  height: 70;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 35;
  margin-bottom: 15;
  border-radius: 90;
`;

const StyledButtonRegistrations = styled.TouchableOpacity`
  background-color: #1abef2;
  width: 90%;
  height: 70;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 50;
  margin-bottom: 75;
  border-radius: 90;
`;

export default Favorites;
