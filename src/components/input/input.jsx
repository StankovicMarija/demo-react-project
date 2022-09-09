import React from "react";
import classes from "./input.module.css";

function Input() {
  return (
    <input
      className={classes.inputEmail}
      type="text"
      name="email"
      placeholder="Enter email address"
    />
  );
}

export default Input;
