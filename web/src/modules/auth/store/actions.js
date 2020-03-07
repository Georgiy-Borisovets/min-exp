import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_SUCCESS,
  SIGNUP_REQUEST_ERROR,
} from './constants';

import { baseAction } from '../../../utils/actions';
import AuthService from '../AuthService';

export const login = (credentials) => {
  return (dispatch) => {
    dispatch(baseAction(LOGIN_REQUEST));

    AuthService.login(credentials)
      .then((res) => {
        const payload = {
          user: res.verifiedUser,
          token: res.token,
        };
        dispatch(baseAction(LOGIN_REQUEST_SUCCESS, payload));
      })
      .catch((error) => {
        dispatch(baseAction(LOGIN_REQUEST_ERROR, error));
      });
  };
};

export const signup = (form) => {
  return (dispatch) => {
    dispatch(baseAction(SIGNUP_REQUEST));

    AuthService.signup(form)
      .then((res) => {
        dispatch(baseAction(SIGNUP_REQUEST_SUCCESS, res));
      })
      .catch(error => {
        dispatch(SIGNUP_REQUEST_ERROR, error);
      });
  };
};
