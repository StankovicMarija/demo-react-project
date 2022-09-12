/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import closeImg from '../../img/x.svg';
import Button from '../button/button';
import Navbar from './navbar';
import classes from './toggleMenu.module.css';

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOnPressEnter = (event) => {
    if (event.key === 'Enter') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      role="button"
      className={isOpen ? classes.openMenu : classes.closeMenu}
    >
      <img
        onClick={handleOpenMenu}
        onKeyDown={handleOnPressEnter}
        className={classes.closeImg}
        src={closeImg}
        alt="close"
      />
      <span className={classes.navMobileLine} />
      <Navbar />
      <Button>Schedule a Demo</Button>
    </div>
  );
};

export default ToggleMenu;
