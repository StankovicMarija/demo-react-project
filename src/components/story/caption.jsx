import React from 'react';
import classes from './caption.module.css';

const Caption = ({ children }) => (
  <div className={classes.caption}>{children}</div>
);

export default Caption;
