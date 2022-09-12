import React from 'react';
import classNames from 'classnames';
import classes from './button.module.css';

const Button = ({ variant, children }) => {
  const cls = classNames(classes.button, {
    [classes.light]: variant === 'light',
    [classes.dark]: variant === 'dark',
  });

  return <button type="button" className={cls}>{children}</button>;
};

export default Button;
