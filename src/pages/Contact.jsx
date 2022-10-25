import React from 'react';
import Caption from '../components/contactForm/caption';
import Form from '../components/contactForm/contactForm';
import Innovators from '../components/contactForm/innovators/innovators';
import ErrorBoundary from '../components/errorBoundary';
import Footer from '../components/footer/footer';
import Navigation from '../components/nav/navigation';
import Schedule from '../components/schedule/schedule';
import useFetch from '../components/useFetch';
import classes from './Contact.module.css';

function Contact() {
  const { data, error, loading } = useFetch('data/contact.json');

  return data ? (
    <div>
      {error && !loading && <div>Something went wrong ...</div>}
      <ErrorBoundary>
        <Navigation btnName={data.schedule.btnName} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Caption caption={data.caption.caption} />
      </ErrorBoundary>
      <ErrorBoundary>
        <div className={classes.formWrapper}>
          <Form />
          <Innovators
            subtitle={data.innovators.subtitle}
            images={data.innovators.images}
          />
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
        <Schedule
          caption={data.schedule.caption}
          btnName={data.schedule.btnName}
        />
      </ErrorBoundary>
      <Footer />
    </div>
  ) : null;
}
export default Contact;
