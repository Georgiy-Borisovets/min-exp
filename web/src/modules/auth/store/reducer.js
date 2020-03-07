import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_SUCCESS,
  SIGNUP_REQUEST_ERROR,
} from './constants';

const INIT_STATE = {
  user: null,
  token: null,
  isFetching: false,
  error: null,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return { ...INIT_STATE, isFetching: true };
    case LOGIN_REQUEST_SUCCESS:
    case SIGNUP_REQUEST_SUCCESS:
      const { user, token } = action.payload;
      return { ...INIT_STATE, user, token };
    case LOGIN_REQUEST_ERROR:
    case SIGNUP_REQUEST_ERROR:
      return { ...INIT_STATE, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
