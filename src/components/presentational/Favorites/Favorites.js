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
  const _renderItem = ({item, index}) => (
    <PublicationCard publicacao={item} navigation={props.navigation} />
  );

  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        title={'Favoritos'}
        rightSide={
          <StyledTouchableOpacity onPress={() => props.navigation.navigate('MyAccount')}>
            <Icon
              name={'user'}
              size={25}
            />
          </StyledTouchableOpacity>
        }
        leftSide={
          <StyledTouchableOpacity onPress={() => props.navigation.pop()}>
            <Icon
              name={'chevron-left'}
              size={25}
              
            />
          </StyledTouchableOpacity>
        }
      />
      <StyledView>
        <StyledContainer>
          <FormRow>
            <StyledButtonFavoritePublications>
              <StyledButtonText>Publicações Favoritas</StyledButtonText>
            </StyledButtonFavoritePublications>
          </FormRow>
          <FormRow>
            <StyledButtonRegistrations
              onPress={() => props.navigation.navigate('Subscriptions')}>
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

const StyledView = styled.View`
  width: 100%;
  justify-content: flex-end;
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

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 80;
  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};
`;

export default Favorites;
