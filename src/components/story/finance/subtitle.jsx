import React from 'react';
import classes from './subtitle.module.css';

const Subtitle = ({ children }) => (
  <div className={classes.subtitle}>{children}</div>
);

export default Subtitle;
