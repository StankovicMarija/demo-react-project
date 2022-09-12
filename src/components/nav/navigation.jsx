import React, { useState } from "react";
import Logo from "../logo";
import Button from "../button/button";
import classes from "./navigation.module.css";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";
import MobileOpenMenu from "./toggleMenu";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuHandler = () => { setIsOpen(true)};
  const closeMenuHandler = () => { setIsOpen(false)};

  return (
    <div className={classes.navigation}>
      <div className={classes.nav}>
        <Logo />
        <Navbar />
        <Button>Schedule a Demo</Button>
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
