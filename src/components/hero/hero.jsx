import React from 'react';
import classes from './hero.module.css';
import Button from '../button/button';
import Link from '../nav/link';
import Input from '../input/input';
import SubscriptionForm from '../modal/subscriptionForm';
import useModalState from '../modal/modalState';
import heroData from '../../data/hero';

const { caption, mobileImage, subText, subTextLink, btnName } = heroData;

const Hero = () => {
  const { openModal } = useModalState();

  return (
    <div className={classes.heroContainer}>
      <img className={classes.mobImg} src={mobileImage} alt="mobile" />
      <div className={classes.wrapper}>
        <h1 className={classes.caption}>{caption}</h1>
        <div className={classes.sheduleForm}>
          <div className={classes.wrapperEmail}>
            <Input />
          </div>
          <div className={classes.formButton}>
            <Button onClick={() => openModal(<SubscriptionForm />)}>
              {btnName}
            </Button>
          </div>
        </div>
        <div className={classes.contactWrapper}>
          <h3 className={classes.text}>{subText}</h3>
          <div className={classes.linkWrapper}>
            <Link to="/contact">{subTextLink}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
