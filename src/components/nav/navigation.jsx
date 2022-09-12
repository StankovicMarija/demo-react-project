import React from 'react';
import Logo from '../logo';
import Button from '../button/button';
import classes from './navigation.module.css';
import Navbar from './navbar';
import MobileNav from './mobileNav';
import ToggleMenu from './toggleMenu';

const Navigation = ({ handleOpenMenu }) => (
  <div className={classes.navigation}>
    <div className={classes.nav}>
      <Logo />
      <Navbar />
      <Button>Schedule a Demo</Button>
    </div>
    <div className={classes.mobileNav}>
      <Logo />
      <MobileNav onClick={handleOpenMenu} />
      <ToggleMenu />
    </div>
  </div>
);

export default Navigation;
