import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  likeNews,
  unlikeNews,
  favoriteNews,
  unfavoriteNews,
} from '../../useCases/publicationUseCases';

import Option from '../core/Option';

/* Config - imports */
import COLORS from '../../config/colors';
import SPACING from '../../config/spacing';

/* Utils - import */
import {beautifulDate, getUserId} from '../../utils/help';

import pug from '../../assets/mike.jpg';

const PublicationCard = ({publicacao, navigation}) => {
  const [idFavorite, setIdFavorite] = useState(-1);
  const [isFavorite, setFavorite] = useState(false);

  const [idLike, setIdLike] = useState(-1);
  const [isLiked, setLiked] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector(({user}) => user.user.userInfo);
  const publication = useSelector(
    ({news}) => news.news.filter(pub => pub.id == publicacao.id)[0],
  );

  useEffect(() => {
    // Setando as variaveis de favoritos
    const indexFavorite = publication.favorites.findIndex(
      favorite => favorite.userId == user?.sub,
    );
    if (indexFavorite != -1) setFavorite(true);
    else setFavorite(false);
    setIdFavorite(indexFavorite);

    // Setando as variaveis de curtidas
    let indexLike = publication.likes.findIndex(
      like => like.userId == user?.sub,
    );

    if (indexLike != -1) setLiked(true);
    else setLiked(false);
    setIdLike(indexLike);
  }, []);

  const handlerFavorites = () => {
    if (isFavorite) {
      setFavorite(false);
      dispatch(unfavoriteNews(publication.favorites[idFavorite]));
    } else {
      dispatch(favoriteNews(publication.id, user.sub));
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
    <Container>
      <Capa
        onPress={() =>
          navigation.navigate('Publication', {newsId: publicacao.id})
        }>
        <Image
          source={{
            uri: publication.cover,
          }}
          aspectRation={1}
          resizeMode={'cover'}
          style={{height: '100%', width: '100%'}}
        />
        <Info>
          <Titulo>{publication.title}</Titulo>
          {publication?.publisher?.nome ? (
            <Autor>{publication.publisher.nome}</Autor>
          ) : null}
          <DataHora>{beautifulDate(publication.date)}</DataHora>
        </Info>
      </Capa>
      <Options>
        <Option type="share" first/>
        <Option
          type="favorite"
          favorite={isFavorite}
          value={publication?.favorites?.length}
          handlerFunction={handlerFavorites}
        />
        <Option
          type="comments"
          value={publication?.comments?.length}
          handlerFunction={() =>
            navigation.navigate('Comments', {news: publication.id})
          }
        />  
        <Option
          type="like"
          liked={isLiked}
          value={publication?.likes?.length}
          handlerFunction={handlerLike}
        />
      </Options>
    </Container>
  );
};

const Container = styled.View`
  height: 200;
  border-width: 1;
  background: white;
  margin-right: ${SPACING.medium};
  margin-left: ${SPACING.medium};
  margin-top: ${SPACING.small};
  margin-bottom: ${SPACING.small};
  flex-direction: row;
`;

const Capa = styled.TouchableOpacity`
  flex: 5;
`;

const Info = styled.View`
  background-color: white;
  height: auto;
  position: absolute;
  bottom: 0;
  opacity: 0.7;
  width: 100%;
  padding-top: ${SPACING.small};
  padding-bottom: ${SPACING.small};
  padding-left: ${SPACING.medium};
  padding-right: ${SPACING.small};
`;
const Titulo = styled.Text`
  font-size: 17;
`;
const Autor = styled.Text`
  font-size: 13;
`;
const DataHora = styled.Text`
  font-size: 11;
`;

const Options = styled.View`
  flex: 1;
  align-items: center;
`;

const Option2 = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%
  border-top-width: ${props => (props.first ? 0 : 1)};
  flex-direction: row;
`;

const NumberOption = styled.Text`
  padding-right: ${SPACING.small};
`;

export default PublicationCard;
