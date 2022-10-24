import React from 'react';
import classes from './caption.module.css';

function Caption({ caption }) {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.caption}>{caption}</h1>
    </div>
  );
}

export default Caption;
