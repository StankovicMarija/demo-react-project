/* eslint-disable max-len */
import React from 'react';
import classes from './finance.module.css';
import finance from '../../../img/story/first.svg';
import banking from '../../../img/story/second.svg';
import consumer from '../../../img/story/third.svg';
import Subtitle from './subtitle';
import Text from '../text';

const Finance = () => (
  <div className={classes.wrapper}>
    <div className={classes.payment}>
      <div className={classes.img}>
        <img src={finance} alt="finance" />
      </div>
      <div className={classes.subtitle}>
        <Subtitle>Personal Finances</Subtitle>
      </div>
      <div className={classes.text}>
        <Text variant="centerAlign">
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.
        </Text>
      </div>
    </div>
    <div className={classes.payment}>
      <div className={classes.img}>
        <img src={banking} alt="banking" />
      </div>
      <div className={classes.subtitle}>
        <Subtitle>Banking &amp; Coverage</Subtitle>
      </div>
      <div className={classes.text}>
        <Text variant="centerAlign">
          With our platform, you can speed up account onboarding and support
          ongoing payments for checking, savings, credit card, and brokerage
          accounts.
        </Text>
      </div>
    </div>
    <div className={classes.payment}>
      <div className={classes.img}>
        <img src={consumer} alt="consumer" />
      </div>
      <div className={classes.subtitle}>
        <Subtitle>Consumer Payments</Subtitle>
      </div>
      <div className={classes.text}>
        <Text variant="centerAlign">
          Its easier to set up secure bank payments with us through a flow
          designed with the user experience in mind. Customers could instantly
          authenticate their account.
        </Text>
      </div>
    </div>
  </div>
);

export default Finance;
