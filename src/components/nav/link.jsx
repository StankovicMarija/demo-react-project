import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./link.module.css";

const Link = (props) => {
  return (
    <NavLink className={classes.link} to={props.to}>
      {props.children}
    </NavLink>
  );
};

export default Link;
