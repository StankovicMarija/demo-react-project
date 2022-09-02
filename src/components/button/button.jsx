import React from "react";
import classNames from "classnames";
import classes from "./button.module.css";

const Button = (props) => {
  let cls = "";

  if (props.variant === "light") {
    cls = classes.light;
  }

  if (props.variant === "dark") {
    cls = classes.dark;
  }

  return (
    <button className={classNames(classes.button, `${cls}`)}>
      {props.children}
    </button>
  );
};

export default Button;
