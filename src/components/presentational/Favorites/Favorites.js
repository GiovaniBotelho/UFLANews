import React from 'react';
import {Image, ImageBackground} from 'react-native';
import styled from 'styled-components';

/* Images */
import BackgroundHeader from '../../../assets/backgroundHeader.png';
import Logo from '../../../assets/logotipo.png';
import Background from '../../../assets/background.png';
import Background2 from '../../../assets/background2.png';
import TouchableTextWithIcon from '../../config/TouchableTextWithIcon';

const Favorites = props => {

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
              <TouchableTextWithIcon
                iconName={'chevron-left'}
                iconSize={20}
                text={'Voltar'}
              />
              <TouchableTextWithIcon 
                iconName={'user'}
                iconSize={25}
              />
            </ImageBackground>
            <StyledText>Favoritos</StyledText>
            <StyledContainer>
              <FormRow>
                <StyledButtonFavoritePublications>
                  <StyledButtonText>Publicações Favoritas</StyledButtonText>
                </StyledButtonFavoritePublications>
              </FormRow>
              <FormRow>
                <StyledButtonRegistrations>
                  <StyledButtonText onPress={handleCancel}>Minhas Inscrições</StyledButtonText>
                </StyledButtonRegistrations>
              </FormRow>
            </StyledContainer>
          </ImageBackground>
        </ImageBackground>
      </StyledView>
    </>
  );
};


/* Componentes estilizados aqui */
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
  textAlign: center;
  fontSize: 40px;
  padding: 20px;
  color: grey;
  margin-top: 40;
`;

const StyledButtonText = styled.Text`
  color: white;
  textAlign: center;
  fontSize: 25px;
  width: 1000%;
`;

const StyledButtonFavoritePublications = styled.TouchableOpacity`
  backgroundColor: #1abef2;
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
  backgroundColor: #1abef2;
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
