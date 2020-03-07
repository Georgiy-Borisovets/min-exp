import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import classes from './AuthContainer.module.scss';

import { login, signup } from 'modules/auth/store/actions';

const AuthContainer = () => {
  const isFetching = useSelector(state => state.auth.isFetching);
  const dispatch = useDispatch();

  const onLogin = useCallback(
    (creds) => dispatch(login(creds)),
    [dispatch]
  );

  const onSignup = useCallback(
    (form) => dispatch(signup(form)),
    [dispatch]
  );

  return (
    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
      <LoginForm onSubmit={onLogin} disabled={isFetching} />
      <div className={classes.separator} />
      <SignupForm onSubmit={onSignup} disabled={isFetching} />
    </div>
  );
};

export default AuthContainer;
