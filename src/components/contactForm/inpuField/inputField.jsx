import React from 'react';
import classNames from 'classnames';
import classes from './inputField.module.css';

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  errorMessage,
}) => {
  const cls = classNames(classes.input, {
    [classes.invalid]: !!errorMessage,
  });

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cls}
      />
      {errorMessage && <span className={classes.errors}>{errorMessage}</span>}
    </div>
  );
};

export default InputField;
