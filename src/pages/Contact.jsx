import React from 'react';
import Caption from '../components/contactForm/caption';
import Form from '../components/contactForm/contactForm';
import Innovators from '../components/contactForm/innovators/innovators';
import Footer from '../components/footer/footer';
import Navigation from '../components/nav/navigation';
import Schedule from '../components/schedule/schedule';
import classes from './Contact.module.css';
import contactData from '../data/contact';

function Contact() {
  const { caption, innovators, schedule } = contactData;
  return (
    <div>
      <Navigation scheduleData={schedule} />
      <Caption caption={caption.caption} />
      <div className={classes.formWrapper}>
        <Form />
        <Innovators subtitle={innovators.subtitle} images={innovators.images} />
      </div>
      <Schedule caption={schedule.caption} btnName={schedule.btnName} />
      <Footer />
    </div>
  );
}

export default Contact;
