import React from "react";
import classNames from "classnames";
import classes from "./button.module.css";

const Button = (props) => {
  const cls = classNames(classes.button, {
    [classes.light]: props.variant === "light",
    [classes.dark]: props.variant === "dark",
  });

  return <button className={cls}>{props.children}</button>;
};

export default Button;
