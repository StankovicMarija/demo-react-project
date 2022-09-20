import React from 'react';
import Button from '../button/button';
import Input from '../input/input';
import classes from './schedule.module.css';

function Schedule() {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.caption}>Ready to start?</h3>
      <div className={classes.formWrapper}>
        <Input />
        <div className={classes.btnWrapper}>
          <Button>Schedule a Demo</Button>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
