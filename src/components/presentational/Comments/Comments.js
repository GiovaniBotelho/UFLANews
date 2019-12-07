import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';

/* Core - imports */
import Header from '../../core/Header';
import CommentBar from '../../core/CommentBar';
import CommentCard from '../../core/CommentCard';

/* Constants */
import COLORS from '../../../config/colors';
import SPACING from '../../../config/spacing';

/* Images - imports */
import notFound from '../../../assets/animations/1725-not-found.json';

const _keyExtractor = comment => comment.id.toString();

const Comments = props => {
  // const [comments, setComments] = useState([]);
  const [newsId, setNewsId] = useState(-1);
  const [newComment, setNewComment] = useState(undefined);

  const comments = useSelector(({comments}) => comments.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    const newsId = props.navigation.getParam('news', undefined);
    setNewsId(newsId);
    dispatch(props.getComments(newsId));
  }, []);

  const deleteComments = idComment => {
    dispatch(props.deleteComment(idComment));
  };

  const addComment = comment => {
    dispatch(props.addComment(comment, newsId));
  };

  return (
    <Container colors={[COLORS.gradientTop, COLORS.gradientBottom]}>
      <Header
        leftSide={
          <StyledTouchableOpacity
            onPress={() => props.navigation.navigate('Home')}>
            <Icon name={'chevron-left'} size={25} />
          </StyledTouchableOpacity>
        }
        title={'Comentários'}
      />
      <FlatList
        data={comments}
        renderItem={({item, index}) => (
          <CommentCard deleteComment={deleteComments} comment={item} />
        )}
        keyExtractor={_keyExtractor}
        ListFooterComponent={props => <FooterStyled />}
        ListEmptyComponent={
          <NotFound>
            <Lottie
              resizeMode="cover"
              style={{width: '50%'}}
              source={notFound}
              autoPlay
              loop
            />
            {comments?.length == 0 && (
              <StyledText>
                Não existem comentários para serem exibidos.
              </StyledText>
            )}
          </NotFound>
        }
      />
      <CommentBar addComment={addComment} newsId={newsId} />
    </Container>
  );
};

const Container = styled(LinearGradient)`
  flex: 1;
`;

const NotFound = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const StyledText = styled.Text``;

const FooterStyled = styled.View`
  padding-bottom: ${SPACING.medium};
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  border-radius: 80;
  padding-left: ${SPACING.default};
  padding-right: ${SPACING.default};
  padding-top: ${SPACING.default};
  padding-bottom: ${SPACING.default};
`;

export default Comments;
