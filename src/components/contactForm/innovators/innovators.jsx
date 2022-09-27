import React from 'react';
import classes from './innovators.module.css';
import tesla from '../../../img/innovators/tesla.svg';
import msoft from '../../../img/innovators/msoft.svg';
import hp from '../../../img/innovators/hp.svg';
import oracle from '../../../img/innovators/oracle.svg';
import google from '../../../img/innovators/google.svg';
import nvidia from '../../../img/innovators/nvidia.svg';

function Innovators() {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.text}>Join the thousands of innovators already building with us</h3>
      <div className={classes.logo}>
        <img src={tesla} alt="tesla" />
        <img src={msoft} alt="msoft" />
        <img src={hp} alt="hp" />
        <img src={oracle} alt="oracle" />
        <img src={google} alt="google" />
        <img src={nvidia} alt="nvidia" />
      </div>
    </div>
  );
}

export default Innovators;
