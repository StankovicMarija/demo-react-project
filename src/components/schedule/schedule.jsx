import React from 'react';
import Button from '../button/button';
import Input from '../input/input';
import classes from './schedule.module.css';
import SubscriptionForm from '../modal/subscriptionForm';
import useModalState from '../modal/modalState';

function Schedule({ scheduleData, subscriptionForm }) {
  const { caption, btnName } = scheduleData;
  const { openModal } = useModalState();
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.caption}>{caption}</h3>
      <div className={classes.formWrapper}>
        <Input />
        <div className={classes.btnWrapper}>
          <Button
            onClick={() =>
              openModal(<SubscriptionForm formConfig={subscriptionForm} />)
            }
          >
            {btnName}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
