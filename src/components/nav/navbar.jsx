import React from 'react';
import Link from './link';
import classes from './navbar.module.css';

const Navbar = ({ mobNav }) => {
  const links = [
    {
      name: 'Pricing',
      route: '/pricing',
    },
    {
      name: 'About',
      route: '/about',
    },
    {
      name: 'Contact',
      route: '/contact',
    },
  ];

  return (
    <nav>
      <ul className={classes.navList}>
        {links.map((link) => (
          <li key={link.name} className={classes.listLink}>
            <Link variant={mobNav} className={classes.link} to={link.route}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
