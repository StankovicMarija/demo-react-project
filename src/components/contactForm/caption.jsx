import React from 'react';
import classes from './caption.module.css';

function Caption() {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.caption}>
        Submit a help request and we will get in touch shortly.
      </h1>
    </div>
  );
}

export default Caption;
