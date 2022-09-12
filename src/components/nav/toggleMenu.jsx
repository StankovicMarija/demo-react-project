import React from "react";
import closeImg from "../../img/x.svg";
import Button from "../button/button";
import Navbar from "./navbar";
import classes from "./toggleMenu.module.css";

const MobileOpenMenu = (props) => {
  return (
    <div className={props.isOpen ? classes.openMenu : classes.closeMenu}>
      <img
        onClick={props.closeMenu}
        className={classes.closeImg}
        src={closeImg}
        alt="close"
      />
      <span className={classes.navMobileLine}></span>
      <div className={classes.navBarWrapper}>
        <Navbar />
      </div>
      <Button>Schedule a Demo</Button>
    </div>
  );
};

export default MobileOpenMenu;
