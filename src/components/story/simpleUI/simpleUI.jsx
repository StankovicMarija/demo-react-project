/* eslint-disable max-len */
import React from 'react';
import classes from './simpleUI.module.css';
import mobileLeft from '../../../img/story/mobileLeft.png';
import mobileRight from '../../../img/story/mobileRight.png';
import Caption from '../caption';
import Text from '../text';

const SimpleUI = () => (
  <div className={classes.wrapper}>
    <div className={classes.mobileBox}>
      <div>
        <img className={classes.mobileCut} src={mobileLeft} alt="mobile" />
      </div>
      <div>
        <img className={classes.mobileCut} src={mobileRight} alt="mobile" />
      </div>
    </div>
    <div>
      <Caption>Simple UI &amp; UX</Caption>
      <div className={classes.text}>
        <Text>
          Our pre-built form is easy to integrate in your app or website is
          checkout flow and designed to optimize conversion.
        </Text>
      </div>
    </div>
  </div>
);

export default SimpleUI;
