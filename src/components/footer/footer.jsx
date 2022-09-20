import React from 'react';
import logo from '../../img/footer/logoWhite.svg';
import Navbar from '../nav/navbar';
import classes from './footer.module.css';
import ImgLink from './footerImgLink/imgLink';

function Footer() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Navbar mobNav="mobileNav" />
      </div>
      <div className={classes.imgLinks}>
        <ImgLink />
      </div>
    </div>
  );
}

export default Footer;
