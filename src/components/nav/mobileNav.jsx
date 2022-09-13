import React from 'react';
import classes from './mobileNav.module.css';
import mobMenuIcon from '../../img/mobMenuIcon.svg';

const MobileNav = ({ openMenu }) => {
  <div className={classes.mobMenu}>
    <input
      className={classes.mobMenuIcon}
      type="image"
      src={mobMenuIcon}
      alt="mobile menu"
      onClick={openMenu}
    />
  </div>;
};

export default MobileNav;
