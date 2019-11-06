import React from 'react';
import {Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

/* Core - imports */
import Header from '../../core/Header';

/* Constants - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

/* Imagens - imports */
import Logo from '../../../assets/logo.png';

const Publication = props => {
  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        showLogo={
          <Image source={Logo} resizeMode={'contain'} style={{height: 50}} />
        }
        rightSide={
          <Icon 
            name={'user'}
            size={25}
            onPress={
              () => props.navigation.navigate('MyAccount')
            }
          />
        }
        leftSide={
          <Icon
            name={'chevron-left'}
            size={25}
            onPress={() => props.navigation.pop()}
          />
        }
      />
      <FullPublication showsVerticalScrollIndicator={false}>
        <PublicationTitle>Titulo da Publicacao</PublicationTitle>
        <PublicationAuthor>Autor da Publicacao</PublicationAuthor>
        <Content>
          <PublicationText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like). Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
          </PublicationText>
        </Content>
        <PublicationTime>Data e hora da publicação</PublicationTime>
        <Options>
          <Option>
            <NumberOption>3</NumberOption>
            <Icon name="comments-o" size={30} color={'#000'} />
          </Option>
          <Option>
            <Icon name="star-o" size={30} color={'#000'} />
          </Option>
          <Option>
            <NumberOption>2</NumberOption>
            <Icon name="thumbs-o-up" size={30} color={'#000'} />
          </Option>
          <Option>
            <Icon name="share-square-o" size={30} color={'#000'} />
          </Option>
        </Options>
      </FullPublication>
    </Container>
  );
};

const Container = styled(LinearGradient)`
  flex: 1;
`;

const FullPublication = styled.ScrollView`
  border-radius: 30;
  background-color: white;
  margin-top: ${SPACING.medium};
  margin-left: ${SPACING.medium};
  margin-bottom: ${SPACING.medium};
  margin-right: ${SPACING.medium};
  padding-top: ${SPACING.small};
  padding-bottom: ${SPACING.small};
  padding-left: ${SPACING.small};
  padding-right: ${SPACING.small};
`;

const PublicationTitle = styled.Text`
  font-size: 25;
  margin-top: ${SPACING.huge};
  margin-left: ${SPACING.medium};
  margin-right: ${SPACING.medium};
  align-self: center;
  font-weight: bold;
`;

const PublicationAuthor = styled.Text`
  align-self: flex-end;
  margin-right: ${SPACING.medium};
  margin-top: ${SPACING.large};
  font-size: 15;
`;

const PublicationTime = styled.Text`
  margin-top: ${SPACING.medium};
  margin-left: ${SPACING.medium};
  margin-bottom: ${SPACING.medium};
  margin-right: ${SPACING.medium};
`;

const Content = styled.View`
  height: auto;
  margin-top: ${SPACING.large};
  margin-bottom: ${SPACING.large};
  margin-right: ${SPACING.large};
  margin-left: ${SPACING.large};
`;

const PublicationText = styled.Text`
  text-align: justify;
`;

const Options = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: ${SPACING.medium};
  margin-bottom: ${SPACING.medium};
`;

const Option = styled.TouchableOpacity`
  width: auto;
  justify-content: space-between;
  align-items: center
  flex-direction: row;
  margin-right: ${SPACING.small};
  margin-left: ${SPACING.small};
`;

const NumberOption = styled.Text`
  padding-right: ${SPACING.small};
`;

export default Publication;
