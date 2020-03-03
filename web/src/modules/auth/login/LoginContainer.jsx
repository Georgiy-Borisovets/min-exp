import React from 'react';
import LoginForm from './LoginForm';

const LoginContainer = () => {
  const onSubmit = (values) => {
    console.log('submitting', values);
  };

  return (
    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginContainer;
