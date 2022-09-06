import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={classes.navList}>
        <li className={classes.navListTab}>
          <NavLink to="/">Pricing</NavLink>
        </li>
        <li className={classes.navListTab}>
          <NavLink to="/">About</NavLink>
        </li>
        <li className={classes.navListTab}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
