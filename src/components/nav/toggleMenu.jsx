import React from "react";
import closeImg from "../../img/x.svg";
import Button from "../button/button";
import Navbar from "./navbar";
import classes from "./toggleMenu.module.css";
import { useState } from "react";

const ToggleMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? classes.openMenu : classes.closeMenu}>
      <img
        onClick={handleOpenMenu}
        className={classes.closeImg}
        src={closeImg}
        alt="close"
      />
      <span className={classes.navMobileLine}></span>
      <Navbar />
      <Button>Schedule a Demo</Button>
    </div>
  );
};

export default ToggleMenu;
