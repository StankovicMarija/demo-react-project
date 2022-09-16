/* eslint-disable max-len */
import React from 'react';
import classes from './clients.module.css';
import Button from '../button/button';
import ClientsLogo from './clientsLogo/clientsLogo';

const Clients = () => (
  <div className={classes.clientsWrapper}>
    <div className={classes.clientLogo}>
      <ClientsLogo />
    </div>
    <div className={classes.clientTextWrapper}>
      <h2 className={classes.caption}>Who we work with</h2>
      <h3 className={classes.subtitle}>
        Today, millions of people around the world have successfully connected
        their accounts to apps they love using our API. We provide developers
        with the tools they need to create easy and accessible experiences for
        their users.
      </h3>
      <div className={classes.btnWrapper}>
        <Button variant="dark">About Us</Button>
      </div>
    </div>
  </div>
);
export default Clients;
