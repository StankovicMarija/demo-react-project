import React from "react";
import Mobile from "./mobile";
import classes from "./hero.module.css";
import Button from "../button/button";

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <Mobile />
      <div className={classes.wrapper}>
        <h1 className={classes.caption}>
          Start building with our APIs for absolutely free.
        </h1>
        <div className={classes.sheduleform}>
          <input
            className={classes.inputemail}
            type="text"
            name="email"
            placeholder="Enter email address"
          />
          <div className={classes.formbutton}>
            <Button>Schedule a Demo</Button>
          </div>
        </div>
        <h3 className={classes.text}>
          Have any questions?<a href="#">Contact Us</a>
        </h3>
      </div>
    </div>
  );
};

export default Hero;
