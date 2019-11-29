import React, {useState, useEffect} from 'react';
import {Image, Text, SectionList} from 'react-native';
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

/* Utils - imports */
import {beautifulDate} from '../../../utils/help';

const Publication = props => {
  const [publication, setPublication] = useState(undefined);
  const [sections, setSections] = useState(undefined);

  useEffect(() => {
    const pub = props.navigation.getParam('publication', undefined);
    setPublication(pub);
    setSections(pub.sections);
  }, []);

  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        title={'Publicação'}
        rightSide={
          <StyledTouchableOpacity
            onPress={() => props.navigation.navigate('MyAccount')}>
            <Icon name={'user'} size={25} />
          </StyledTouchableOpacity>
        }
        leftSide={
          <StyledTouchableOpacity onPress={() => props.navigation.pop()}>
            <Icon name={'chevron-left'} size={25} />
          </StyledTouchableOpacity>
        }
      />
      <FullPublication showsVerticalScrollIndicator={false}>
        <PublicationTitle>{publication?.title}</PublicationTitle>
        <PublicationAuthor>{publication?.publisher?.nome}</PublicationAuthor>
        <Content>
          {sections && sections?.length > 0 && (
            <SectionList
              sections={sections}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => <PublicationText>{item}</PublicationText>}
              renderSectionHeader={({section: {title, icon}}) => (
                <PublicationSectionHeader>
                  <Icon name={icon} size={25} />
                  <PublicationTitleSection>{title}</PublicationTitleSection>
                </PublicationSectionHeader>
              )}
            />
          )}
        </Content>
        <PublicationTime>{beautifulDate(publication?.date)}</PublicationTime>
        <Options>
          <Option>
            <NumberOption>3</NumberOption>
            <Icon
              name="comments-o"
              size={30}
              color={'#000'}
              onPress={() => props.navigation.navigate('Comments')}
            />
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

const PublicationSectionHeader = styled.View`
  min-height: 35;
  flex-direction: row;
  align-items: center;
  margin-top: ${SPACING.medium};
  margin-bottom: ${SPACING.medium};
`;

const PublicationTitleSection = styled.Text`
  font-size: 20;
  margin-left: ${SPACING.medium};
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

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 80;
  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};
`;

export default Publication;
