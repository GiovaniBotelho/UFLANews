import {createActions, createReducer} from 'reduxsauce';

/**
 * Criando ActionTypes e creators
 */
export const {Types, Creators} = createActions({
  getComments: [],
  getCommentsSuccess: ['comments'],
  getCommentsFailure: ['error'],

  addComment: [],
  addCommentSuccess: ['comment'],
  addCommentFailure: ['error'],

  removeComment: [],
  removeCommentSuccess: ['id'],
  removeCommentFailure: ['error'],
});

/**
 * Criando os reducers handlers
 */
const INITIAL_STATE = {
  comments: [],
  isLoading: false,
  error: '',
};

const getComments = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
});

const getCommentsSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  comments: action.comments,
});

const getCommentsFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  comments: {},
  error: action.error,
});

const addComment = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
});

const addCommentSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  comments: [...state.comments, action.comment],
  isLoading: true,
});

const addCommentFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
  error: action.error,
});

const removeComment = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
});

const removeCommentSuccess = (state = INITIAL_STATE, action) => {
  let indexComment = state.comments.findIndex(
    comment => comment.id == action.id,
  );
  return {
    ...state,
    comments: [
      ...state.comments.slice(0, indexComment),
      ...state.comments.slice(indexComment + 1),
    ],
    isLoading: false,
  };
};

const removeCommentFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  error: action.error,
});

/**
 * Criando o nosso proprio reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.GET_COMMENTS]: getComments,
  [Types.GET_COMMENTS_SUCCESS]: getCommentsSuccess,
  [Types.GET_COMMENTS_FAILURE]: getCommentsFailure,

  [Types.ADD_COMMENT]: addComment,
  [Types.ADD_COMMENT_SUCCESS]: addCommentSuccess,
  [Types.ADD_COMMENT_FAILURE]: addCommentFailure,

  [Types.REMOVE_COMMENT]: removeComment,
  [Types.REMOVE_COMMENT_SUCCESS]: removeCommentSuccess,
  [Types.REMOVE_COMMENT_FAILURE]: removeCommentFailure,
});
