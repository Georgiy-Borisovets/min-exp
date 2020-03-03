import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-final-form';
import LoginFormField from './LoginFormField';
import { loginFormFields } from './constants';

const LoginForm = ({ onSubmit }) => {
  const { t } = useTranslation();

  const emailPlaceholder = loginFormFields.EMAIL.PLACEHOLDER;
  const passwordPlaceholder = loginFormFields.PASSWORD.PLACEHOLDER;

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form
          className="base-card card-shadow px-2 text-center"
          onSubmit={handleSubmit}
        >
          <h3>{ t('auth:login.title') }</h3>
          <LoginFormField
            name={loginFormFields.EMAIL.FIELD}
            className="d-block my-2"
            placeholder={emailPlaceholder}
          />
          <LoginFormField
            name={loginFormFields.PASSWORD.FIELD}
            className="d-block my-2"
            type="password"
            placeholder={passwordPlaceholder}
          />
          <div>
            <button type="submit">Submit</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      )}
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  onSubmit: () => {},
};

export default LoginForm;
