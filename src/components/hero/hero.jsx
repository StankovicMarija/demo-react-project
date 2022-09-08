import React from "react";
import Mobile from "./mobile";
import classes from "./hero.module.css";
import Button from "../button/button";
import Link from "../nav/link";

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <Mobile />
      <div className={classes.wrapper}>
        <h1 className={classes.caption}>
          Start building with our APIs for absolutely free.
        </h1>
        <div className={classes.sheduleForm}>
          <input
            className={classes.inputEmail}
            type="text"
            name="email"
            placeholder="Enter email address"
          />
          <div className={classes.formButton}>
            <Button>Schedule a Demo</Button>
          </div>
        </div>
        <h3 className={classes.text}>Have any questions?</h3>
        <Link>Contact Us</Link>
      </div>
    </div>
  );
};

export default Hero;
