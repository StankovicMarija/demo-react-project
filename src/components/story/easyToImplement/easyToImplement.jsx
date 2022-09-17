/* eslint-disable max-len */
import React from 'react';
import classes from './easyToImplement.module.css';
import code from '../../../img/story/code.svg';
import codeCircles from '../../../img/story/circles.svg';
import Caption from '../caption';
import Text from '../text';

function EasyToImplement() {
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
        <Caption>Easy to implement</Caption>
        <div className={classes.text}>
          <Text>
            Our API comes with just a few lines of code. You will be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default EasyToImplement;
