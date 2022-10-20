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
  const { caption, formConfig, innovators, schedule, subscriptionForm } =
    contactData;
  return (
    <div>
      <Navigation scheduleData={schedule} subscriptionForm={subscriptionForm}/>
      <Caption captionData={caption} />
      <div className={classes.formWrapper}>
        <Form contactFormData={formConfig} />
        <Innovators innovatorsData={innovators} />
      </div>
      <Schedule scheduleData={schedule} subscriptionForm={subscriptionForm} />
      <Footer />
    </div>
  );
}

export default Contact;
