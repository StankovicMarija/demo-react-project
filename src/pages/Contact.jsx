import React from 'react';
import Caption from '../components/contactForm/caption';
import Form from '../components/contactForm/contactForm';
import Innovators from '../components/contactForm/innovators/innovators';
import Footer from '../components/footer/footer';
import Navigation from '../components/nav/navigation';
import Schedule from '../components/schedule/schedule';
import classes from './Contact.module.css';

function Contact() {
  return (
    <div>
      <Navigation />
      <Caption />
      <div className={classes.formWrapper}>
        <Form />
        <Innovators />
      </div>
      <Schedule />
      <Footer />
    </div>
  );
}

export default Contact;
