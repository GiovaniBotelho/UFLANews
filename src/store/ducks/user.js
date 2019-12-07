import {createActions, createReducer} from 'reduxsauce';

/**
 * Criando ActionTypes e creators
 */
export const {Types, Creators} = createActions({
  login: [],
  loginSuccess: ['user'],
  loginFailure: ['error'],

  getInfo: [],
  getInfoSuccess: ['user'],
  getInfoFailure: ['error'],
});

/**
 * Criando os reducers handlers
 */
const INITIAL_STATE = {
  user: {},
  isLoading: false,
  error: '',
};

const userLogin = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
});

const userLoginSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  user: action.user,
});

const userLoginFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  user: {},
  error: action.error,
});

const userGetInfo = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: true,
});

const userGetInfoSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  user: {
    ...state.user,
    ...action.user,
  },
});

const userGetInfoFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  user: {},
  error: action.error,
});

/**
 * Criando o nosso proprio reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.LOGIN]: userLogin,
  [Types.LOGIN_SUCCESS]: userLoginSuccess,
  [Types.LOGIN_FAILURE]: userLoginFailure,

  [Types.GET_INFO]: userGetInfo,
  [Types.GET_INFO_SUCCESS]: userGetInfoSuccess,
  [Types.GET_INFO_FAILURE]: userGetInfoFailure,
});
