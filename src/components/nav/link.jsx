import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './link.module.css';

const Link = ({ to, children }) => (
  <NavLink className={classes.link} to={to}>
    {children}
  </NavLink>
);

export default Link;
