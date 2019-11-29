import React from 'react';

import Comments from '../components/presentational/Comments';

import { getCommentsByNews } from '../useCases/publicationUseCases';
import { deleteComment } from '../useCases/commentUseCase';

const CommentsScreen = props => {
  return <Comments navigation={props.navigation} getComments={getCommentsByNews} deleteComment={deleteComment} />;
};
export default CommentsScreen;
