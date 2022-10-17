import React from 'react';
import classes from './modalContent.module.css';

const ModalContent = ({ children }) => (
  <div className={classes.content}>{children}</div>
);
export default ModalContent;
