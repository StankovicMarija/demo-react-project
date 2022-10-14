import React from 'react';
import classes from './clientsLogo.module.css';
import imgs from './clientLogoImages';

const ClientsLogo = () => (
  <>
    {imgs.map(clientLogo => (
      <div key={clientLogo.name} className={classes.clientLogo}>
        <img src={clientLogo.src} alt={clientLogo.name} />
      </div>
    ))}
  </>
);

export default ClientsLogo;
