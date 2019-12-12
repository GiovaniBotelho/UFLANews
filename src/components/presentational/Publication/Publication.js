import React, {useState, useEffect} from 'react';
import {Image, Text, SectionList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import HTML from 'react-native-render-html';

/* Core - imports */
import Header from '../../core/Header';
import Option from '../../core/Option';

/* Constants - imports */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

/* Imagens - imports */
import Logo from '../../../assets/logo.png';

/* Utils - imports */
import {beautifulDate, getUserId} from '../../../utils/help';

const Publication = props => {
  const [idFavorite, setIdFavorite] = useState(-1);
  const [isFavorite, setFavorite] = useState(false);

  const [idLike, setIdLike] = useState(-1);
  const [isLiked, setLiked] = useState(false);

  // const [newsId, setNewsId] = useState(-1);

  const dispatch = useDispatch();

  const publication = useSelector(({news}) => news.newsDetails);
  const isLoading = useSelector(({news}) => news.isLoading);

  useEffect(() => {
    const pub = props.navigation.getParam('newsId', undefined);
    // setNewsId(pub);
    dispatch(props.getPublication(pub));
  }, []);

  useEffect(() => {
    // Setando as variaveis de favoritos
    const indexFavorite = publication?.favorites?.findIndex(
      favorite => favorite.userId == user?.sub,
    );
    if (indexFavorite != -1) setFavorite(true);
    else setFavorite(false);
    setIdFavorite(indexFavorite);

    // Setando as variaveis de curtidas
    let indexLike = publication?.likes?.findIndex(
      like => like.userId == user?.sub,
    );

    if (indexLike != -1) setLiked(true);
    else setLiked(false);
    setIdLike(indexLike);
  }, [publication]);

  const handlerFavorites = () => {
    if (isFavorite) {
      setFavorite(false);
      dispatch(unfavoriteNews(publication?.favorites[idFavorite]));
    } else {
      dispatch(favoriteNews(publication?.id, user?.sub));
      setFavorite(true);
    }
  };

  const handlerLike = () => {
    if (isLiked) {
      setLiked(false);
      dispatch(unlikeNews(publication.likes[idLike]));
    } else {
      dispatch(likeNews(publication.id, user.sub));
      setLiked(true);
    }
  };

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
        {!isLoading && (
          <>
            <PublicationTitle>{publication?.title}</PublicationTitle>
            <PublicationAuthor>
              {publication?.publisher?.nome}
            </PublicationAuthor>
            <Content>
              {publication?.sections && publication?.sections?.length > 0 && (
                <SectionList
                  sections={publication?.sections}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({item}) => (
                    <HTML html={item} />
                    // <PublicationText>{item}</PublicationText>
                  )}
                  renderSectionHeader={({section: {title, icon}}) => (
                    <PublicationSectionHeader>
                      <Icon name={icon} size={25} />
                      <PublicationTitleSection>{title}</PublicationTitleSection>
                    </PublicationSectionHeader>
                  )}
                />
              )}
            </Content>
            <PublicationTime>
              {beautifulDate(publication?.date)}
            </PublicationTime>
            <Options>
              <Option
                type="comments"
                value={publication?.comments?.length}
                handlerFunction={() =>
                  navigation.navigate('Comments', {news: publication.id})
                }
                width="auto"
              />
              <Option
                type="favorite"
                favorite={isFavorite}
                value={publication?.favorites?.length}
                handlerFunction={handlerFavorites}
                width="auto"
              />
              <Option
                type="like"
                liked={isLiked}
                value={publication?.likes?.length}
                handlerFunction={handlerLike}
                width="auto"
              />
              <Option type="share" first width="auto" />
            </Options>
          </>
        )}
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
`;

// const Option = styled.TouchableOpacity`
//   width: auto;
//   justify-content: space-between;
//   align-items: center
//   flex-direction: row;
//   margin-right: ${SPACING.small};
//   margin-left: ${SPACING.small};
// `;

// const NumberOption = styled.Text`
//   padding-right: ${SPACING.small};
// `;

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 80;
  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};
`;

export default Publication;
