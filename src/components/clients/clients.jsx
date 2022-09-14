/* eslint-disable max-len */
import React from 'react';
import classes from './clients.module.css';
import Button from '../button/button';

const Clients = () => {
  const clients = [
    { name: 'tesla', src: '../../img/clients/tesla.svg' },
    { name: 'mcrsft', src: '../../img/clients/mcrsft.svg' },
    { name: 'hp', src: '../../img/clients/hp.svg' },
    { name: 'oracle', src: '../../img/clients/oracle.svg' },
    { name: 'google', src: '../../img/clients/google.svg' },
  ];

  return (
    <div>
      <div className={classes.clientsWrapper}>
        {clients.map((client) => (
          <img
            key={client.name}
            alt="client"
            src={client.src}
            className={classes.client}
          />
        ))}
      </div>

      <h2>Who we work with</h2>
      <h3>
        Today, millions of people around the world have successfully connected
        their accounts to apps they love using our API. We provide developers
        with the tools they need to create easy and accessible experiences for
        their users.
      </h3>
      <Button>About Us</Button>
    </div>
  );
};
export default Clients;
