import React from 'react';
import classNames from 'classnames';
import classes from './text.module.css';

const Text = ({ variant, children }) => {
  const cls = classNames(classes.text, {
    [classes.centerAlign]: variant === 'centerAlign',
  });

  return <div className={cls}>{children}</div>;
};

export default Text;
