import React from 'react';
import closeImg from '../../img/x.svg';
import Button from '../button/button';
import Navbar from './navbar';
import classes from './toggleMenu.module.css';

const MobileOpenMenu = ({ openMenuHandler, closeMenu, isOpen }) => {
  const handleOnPressEnter = (event) => {
    if (event.key === 'Enter') {
      openMenuHandler();
    }
  };

  return (
    <div className={isOpen ? classes.openMenu : classes.closeMenu}>
      <button
        className={classes.btnWrapper}
        type="button"
        onClick={closeMenu}
        onKeyDown={handleOnPressEnter}
      >
        <img className={classes.closeImg} src={closeImg} alt="close" />
      </button>
      <span className={classes.navMobileLine} />
      <div className={classes.navBarWrapper}>
        <Navbar mobNav="mobileNav" />
      </div>
      <Button>Schedule a Demo</Button>
    </div>
  );
};

export default MobileOpenMenu;
