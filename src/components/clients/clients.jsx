import React from 'react';
import classes from './clients.module.css';
import Button from '../button/button';
import ClientsLogo from './clientsLogo/clientsLogo';

const Clients = ({ clientsData }) => {
  const { caption, text, btnName } = clientsData;
  return (
    <div className={classes.clientsWrapper}>
      <div className={classes.clientLogo}>
        <ClientsLogo />
      </div>
      <div className={classes.clientTextWrapper}>
        <h2 className={classes.caption}>{caption}</h2>
        <h3 className={classes.subtitle}>{text}</h3>
        <div className={classes.btnWrapper}>
          <Button variant="dark">{btnName}</Button>
        </div>
      </div>
    </div>
  );
};
export default Clients;
