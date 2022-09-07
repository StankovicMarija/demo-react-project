import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navlink.module.css";

const Navlink = (props) => {
  return (
    <NavLink className={classes.navLink} to={props.to}>
      {props.children}
    </NavLink>
  );
};

export default Navlink;
