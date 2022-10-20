import React from 'react';
import classes from './easyToImplement.module.css';
import codeCircles from '../../../img/story/circles.svg';
import Caption from '../caption';
import Text from '../text';

function EasyToImplement({ easyToImplementData }) {
  const { caption, text, code } = easyToImplementData;

  return (
    <div className={classes.wrapper}>
      <div className={classes.code}>
        <div className={classes.codeCircles}>
          <img src={codeCircles} alt="code-circles" />
        </div>
        <div className={classes.codeText}>
          <img src={code} alt="code-text" />
        </div>
      </div>
      <div className={classes.textWrapper}>
        <Caption>{caption}</Caption>
        <div className={classes.text}>
          <Text>{text}</Text>
        </div>
      </div>
    </div>
  );
}

export default EasyToImplement;
