import React from 'react';
import classes from './simpleUI.module.css';
import Caption from '../caption';
import Text from '../text';

const SimpleUI = ({ simpleUIData }) => {
  const { caption, text, imgLeft, imgRight, descr } = simpleUIData;
  // console.log(simpleUIData);
  return (
    <div className={classes.wrapper}>
      <div className={classes.mobileBox}>
        <div>
          <img className={classes.mobileCut} src={imgLeft} alt={descr} />
        </div>
        <div>
          <img className={classes.mobileCut} src={imgRight} alt={descr} />
        </div>
      </div>
      <div>
        <Caption>{caption}</Caption>
        <div className={classes.text}>
          <Text>{text}</Text>
        </div>
      </div>
    </div>
  );
};

export default SimpleUI;
