import React from 'react';
import closeImg from '../../img/x.svg';
import Button from '../button/button';
import Navbar from './navbar';
import classes from './toggleMenu.module.css';

const MobileOpenMenu = ({ handleOpenMenu }) => {
  function handleOnPressEnter(event) {
    if (event.key === 'Enter') {
      handleOpenMenu();
    }
  }

    <div className={handleOpenMenu.isOpen ? classes.openMenu : classes.closeMenu}>
      <button
        className={classes.btnWrapper}
        type="button"
        onClick={handleOpenMenu}
        onKeyDown={handleOnPressEnter}
      >
        <img className={classes.closeImg} src={closeImg} alt="close" />
      </button>
      <span className={classes.navMobileLine} />
      <div className={classes.navBarWrapper}>
        <Navbar />
      </div>
      <Button>Schedule a Demo</Button>
    </div>;
};

export default MobileOpenMenu;
