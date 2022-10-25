import React, { useState, useEffect } from 'react';
import Caption from '../components/contactForm/caption';
import Form from '../components/contactForm/contactForm';
import Innovators from '../components/contactForm/innovators/innovators';
import ErrorBoundary from '../components/errorBoundary';
import Footer from '../components/footer/footer';
import Navigation from '../components/nav/navigation';
import Schedule from '../components/schedule/schedule';
import classes from './Contact.module.css';

function Contact() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    fetch('data/contact.json')
      .then(response => response.json())
      .then(result => setContactData(result));
  }, []);

  return contactData ? (
    <div>
      <ErrorBoundary>
        <Navigation btnName={contactData.schedule.btnName} />
        <Caption caption={contactData.caption.caption} />
        <div className={classes.formWrapper}>
          <Form />
          <Innovators
            subtitle={contactData.innovators.subtitle}
            images={contactData.innovators.images}
          />
        </div>
        <Schedule
          caption={contactData.schedule.caption}
          btnName={contactData.schedule.btnName}
        />
        <Footer />
      </ErrorBoundary>
    </div>
  ) : null;
}
export default Contact;
