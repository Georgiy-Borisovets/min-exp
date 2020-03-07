import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-final-form';
import FormField from '../../../components/ui/form/FormField';
import { AUTH_FORM_FIELDS } from './constants';

const LoginForm = ({ onSubmit, disabled }) => {
  const { t } = useTranslation();

  const emailPlaceholder = t('auth:login.email');
  const passwordPlaceholder = t('auth:login.password');

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form
          className="base-card card-border px-3 py-2 text-center"
          onSubmit={handleSubmit}
        >
          <div className="color-gray-light font-size-lg">{ t('auth:login.title') }</div>
          <FormField
            name={AUTH_FORM_FIELDS.EMAIL}
            className="d-block my-3"
            placeholder={emailPlaceholder}
          />
          <FormField
            name={AUTH_FORM_FIELDS.PASSWORD}
            className="d-block my-3"
            type="password"
            placeholder={passwordPlaceholder}
          />
          <button
            className="btn btn-outline-primary"
            type="submit"
            disabled={disabled}
          >
            { t('auth:login.submit') }
          </button>
        </form>
      )}
    </Form>
  );
};

LoginForm.propTypes = {
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  disabled: false,
  onSubmit: () => {},
};

export default LoginForm;
