import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-final-form';
import FormField from '../../../components/ui/form/FormField';
import { AUTH_FORM_FIELDS } from './constants';

const SignupForm = ({ onSubmit, disabled }) => {
  const { t } = useTranslation();

  const namePlaceholder = t('auth:signup.name');
  const emailPlaceholder = t('auth:signup.email');
  const passwordPlaceholder = t('auth:signup.password');

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form
          className="base-card card-border px-4 py-2 text-center"
          onSubmit={handleSubmit}
        >
          <div className="color-gray-light font-size-lg">{ t('auth:signup.title') }</div>
          <FormField
            name={AUTH_FORM_FIELDS.NAME}
            className="d-block my-4"
            placeholder={namePlaceholder}
          />
          <FormField
            name={AUTH_FORM_FIELDS.EMAIL}
            className="d-block my-4"
            placeholder={emailPlaceholder}
          />
          <FormField
            name={AUTH_FORM_FIELDS.PASSWORD}
            className="d-block my-4"
            type="password"
            placeholder={passwordPlaceholder}
          />
          <button
            className="btn btn-secondary"
            type="submit"
            disabled={disabled}
          >
            { t('auth:signup.submit') }
          </button>
        </form>
      )}
    </Form>
  );
};

SignupForm.propTypes = {
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
};

SignupForm.defaultProps = {
  disabled: false,
  onSubmit: () => {},
};

export default SignupForm;
