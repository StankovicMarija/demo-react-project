import React, { useContext } from 'react';
import Button from '../button/button';
import Input from '../input/input';
import classes from './schedule.module.css';
import ModalContext from '../modal/modalContext';

function Schedule() {
  const ctx = useContext(ModalContext);
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.caption}>Ready to start?</h3>
      <div className={classes.formWrapper}>
        <Input />
        <div className={classes.btnWrapper}>
          <Button onClick={ctx.openModal}>Schedule a Demo</Button>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
