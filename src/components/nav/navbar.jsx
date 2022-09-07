import React from "react";
import Navlink from "./navlink";
import classes from "./navbar.module.css";

const Navbar = () => {
  const links = [
    {
      className: "navLink",
      name: "Pricing",
      route: "/pricing",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];

  return (
    <nav>
      <ul className={classes.navList}>
        {links.map((link) => (
          <li className={link.Navlink}>
            <Navlink to={link.route}>{link.name}</Navlink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
