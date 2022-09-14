import React from 'react';
import classes from './hero.module.css';
import Button from '../button/button';
import Link from '../nav/link';
import Input from '../input/input';
import mobile from '../../img/mobile.png';

const Hero = () => (
  <div className={classes.heroContainer}>
    <img className={classes.mobImg} src={mobile} alt="mobile" />
    <div className={classes.wrapper}>
      <h1 className={classes.caption}>
        Start building with our APIs for absolutely free.
      </h1>
      <div className={classes.sheduleForm}>
        <div className={classes.wrapperEmail}>
          <Input />
        </div>
        <div className={classes.formButton}>
          <Button>Schedule a Demo</Button>
        </div>
      </div>
      <div className={classes.contactWrapper}>
        <h3 className={classes.text}>Have any questions?</h3>
        <div className={classes.linkWrapper}>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
