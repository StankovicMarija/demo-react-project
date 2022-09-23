import React from 'react';
import classes from './inputField.module.css';

const InputField = ({
  id,
  type,
  name,
  placeholder,
  value,
  onChange,
  errorMessage,
}) => (
  <div>
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes.input}
    />
    {errorMessage && <span className={classes.errors}>{errorMessage}</span>}
  </div>
);

export default InputField;
