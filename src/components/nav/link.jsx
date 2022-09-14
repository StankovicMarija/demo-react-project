import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './link.module.css';

const Link = ({ to, children, variant }) => {
  const cls = classNames(classes.link, {
    [classes.mobileNav]: variant === 'mobileNav',
  });
  return (
    <NavLink className={cls} to={to}>
      {children}
    </NavLink>
  );
};

export default Link;
