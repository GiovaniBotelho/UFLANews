import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  likeNew,
  unlikeNew,
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
  const [iconLike, setIconLike] = useState('thumbs-o-up');
  const [colorLike, setColorLike] = useState(COLORS.none);
  const [idLike, setIdLike] = useState(null);
  const [likes, setLikes] = useState(publicacao?.likes?.length);

  const [idFavorite, setIdFavorite] = useState(-1);
  const [favorites, setFavorites] = useState(publicacao?.favorites?.length);
  const [isFavorite, setFavorite] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector(({user}) => user.user.userInfo);

  useEffect(() => {
    async function setIcons() {
      const like = publicacao.likes.filter(like => user?.sub == like.userId);
      if (like.length) {
        setIconLike('thumbs-up');
        setColorLike(COLORS.like);
        setIdLike(like[0].id);
      }
    }

    setIcons();
  }, []);

  useEffect(() => {
    async function setFavorites() {
      const index = publicacao.favorites.findIndex(
        favorite => favorite.userId == user?.sub,
      );
      console.log(index);
      if (index != -1) setFavorite(true);
      else setFavorite(false);
      setIdFavorite(index);
    }
    setFavorites();
  }, [isFavorite]);

  const handlerFavorites = () => {
    if (isFavorite) {
      setFavorite(false);
      // dispatch(unfavoriteNews(idFavorite));
    } else {
      dispatch(favoriteNews(publicacao.id, user.sub));
      setFavorite(true);
    }
  };

  return (
    <Container>
      <Capa
        onPress={() =>
          navigation.navigate('Publication', {publication: publicacao})
        }>
        <Image
          source={
            typeof publicacao.cover != 'string'
              ? pug
              : {
                  uri: publicacao.cover,
                }
          }
          aspectRation={1}
          resizeMode={'cover'}
          style={{height: '100%', width: '100%'}}
        />
        <Info>
          <Titulo>{publicacao.title}</Titulo>
          {publicacao?.publisher?.nome ? (
            <Autor>{publicacao.publisher.nome}</Autor>
          ) : null}
          <DataHora>{beautifulDate(publicacao.date)}</DataHora>
        </Info>
      </Capa>
      <Options>
        <Option2 first>
          <Icon name="share-square-o" size={25} color={'#000'} />
        </Option2>

        <Option
          type="favorite"
          favorite={isFavorite}
          value={favorites}
          handlerFunction={handlerFavorites}
        />
        <Option2
          onPress={() =>
            navigation.navigate('Comments', {news: publicacao.id})
          }>
          <NumberOption>{publicacao?.comments?.length}</NumberOption>
          <Icon name="comments-o" size={30} color={'#000'} />
        </Option2>

        <Option2
          onPress={() =>
            idLike
              ? unlikeNew(
                  idLike,
                  setIconLike,
                  setColorLike,
                  setIdLike,
                  setLikes,
                  likes,
                )
              : likeNew(
                  publicacao.id,
                  setIconLike,
                  setColorLike,
                  setIdLike,
                  setLikes,
                  likes,
                )
          }>
          <NumberOption>{likes}</NumberOption>
          <Icon name={iconLike} size={30} color={colorLike} />
        </Option2>
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
