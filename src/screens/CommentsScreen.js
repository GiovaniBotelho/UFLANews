import React from 'react';

import {getCommentsByNews} from '../useCases/publicationUseCases';

const CommentsScreen = props => {
  return <Comments navigation={props.navigation} getComments={getCommentsByNews}/>;
};
export default CommentsScreen;
