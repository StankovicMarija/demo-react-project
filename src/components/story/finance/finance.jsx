import React from 'react';
import classes from './finance.module.css';
import Subtitle from './subtitle';
import Text from '../text';

const Finance = ({ financeData }) => {
  const {
    titleFinances,
    titleBanking,
    titlePayments,
    textFinances,
    textBanking,
    textPayments,
    imgFinances,
    imgBanking,
    imgPayments,
  } = financeData;

  return (
    <div className={classes.wrapper}>
      <div className={classes.payment}>
        <div className={classes.img}>
          <img src={imgFinances} alt="finance" />
        </div>
        <div className={classes.subtitle}>
          <Subtitle>{titleFinances}</Subtitle>
        </div>
        <div className={classes.text}>
          <Text variant="centerAlign">{textFinances}</Text>
        </div>
      </div>
      <div className={classes.payment}>
        <div className={classes.img}>
          <img src={imgBanking} alt="banking" />
        </div>
        <div className={classes.subtitle}>
          <Subtitle>{titleBanking}</Subtitle>
        </div>
        <div className={classes.text}>
          <Text variant="centerAlign">{textBanking}</Text>
        </div>
      </div>
      <div className={classes.payment}>
        <div className={classes.img}>
          <img src={imgPayments} alt="consumer" />
        </div>
        <div className={classes.subtitle}>
          <Subtitle>{titlePayments}</Subtitle>
        </div>
        <div className={classes.text}>
          <Text variant="centerAlign">{textPayments}</Text>
        </div>
      </div>
    </div>
  );
};
export default Finance;
