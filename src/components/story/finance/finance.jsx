import React from 'react';
import classes from './finance.module.css';
import Subtitle from './subtitle';
import Text from '../text';

const Finance = ({ finance }) => (
  <div className={classes.wrapper}>
    {finance.map(({ title, text, img }) => (
      <div key={title} className={classes.payment}>
        <div className={classes.img}>
          <img src={img} alt={title} />
        </div>
        <div className={classes.subtitle}>
          <Subtitle>{title}</Subtitle>
        </div>
        <div className={classes.text}>
          <Text variant="centerAlign">{text}</Text>
        </div>
      </div>
    ))}
  </div>
);
export default Finance;
