import React, { useState, useContext } from 'react';
import Logo from '../logo';
import Button from '../button/button';
import classes from './navigation.module.css';
import Navbar from './navbar';
import MobileNav from './mobileNav';
import MobileOpenMenu from './toggleMenu';
import ModalContext from '../modal/useModal';
import SubscriptionForm from '../modal/subscriptionForm';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuHandler = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeMenuHandler = () => {
    setIsOpen(false);
    document.body.style.overflow = 'visible';
  };

  const ctx = useContext(ModalContext);
  return (
    <div className={classes.navigation}>
      <div className={classes.nav}>
        <Logo />
        <Navbar />
        <div className={classes.btnWrapper}>
          <Button onClick={() => ctx.openModal(<SubscriptionForm />)}>
            Schedule a Demo
          </Button>
        </div>
      </div>
      <div className={classes.mobileNav}>
        <Logo />
        <MobileNav openMenu={openMenuHandler} />
        <MobileOpenMenu closeMenu={closeMenuHandler} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Navigation;
