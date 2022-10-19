import React from 'react';
import classes from './caption.module.css';
import contactData from '../../data/contact';

const { caption } = contactData;

function Caption() {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.caption}>{caption}</h1>
    </div>
  );
}

export default Caption;
