import React from "react";
import classes from "./mobileNav.module.css";
import mobMenuIcon from "../../img/mobMenuIcon.svg";

const MobileNav = (props) => {
  return (
    <div className={classes.mobMenu}>
      <input
        type="image"
        src={mobMenuIcon}
        alt="mobile menu"
        onClick={props.openMenu}
      />
    </div>
  );
};

export default MobileNav;
