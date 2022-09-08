import React from "react";
import classes from "./link.module.css";

const Link = (props) => {
  return (
    <Link className={classes.link} to={props.to}>
      {props.children}
    </Link>
  );
};

export default Link;
