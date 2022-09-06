import React from "react";
import Logo from "../logo";
import Button from "../button/button";
import classes from "./navigation.module.css";
import Navbar from "./navbar";

const Navigation = () => {
  return (
    <div className={classes.nav}>
      <Logo />
      <Navbar />
      <Button>Schedule a Demo</Button>
    </div>
  );
};

export default Navigation;
