import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Field } from 'react-final-form';

// className="base-input font-size-main font-bold"

const LoginFormField = (props) => {
  const {
    name,
    type,
    placeholder,
    className,
  } = props;
  const classes = clsx(className, 'base-input', 'font-size-main', 'font-bold');

  return (
    <Field name={name}>
      {({ input }) => (
        <input
          {...input}
          type={type}
          className={classes}
          placeholder={placeholder}
        />
      )}
    </Field>
  );
};
LoginFormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

LoginFormField.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
};

export default LoginFormField;
