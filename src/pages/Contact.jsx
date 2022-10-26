import React from 'react';
import Caption from '../components/contactForm/caption';
import Form from '../components/contactForm/contactForm';
import Innovators from '../components/contactForm/innovators/innovators';
import ContLoader from '../components/contentLoader';
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
      <ErrorBoundary>
        <Navigation btnName={data.schedule.btnName} />
      </ErrorBoundary>
      <ErrorBoundary>
        {!error && loading ? (
          <Caption caption={data.caption.caption} />
        ) : (
          <ContLoader />
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        <div className={classes.formWrapper}>
          <Form />
          {!error && loading ? (
            <Innovators
              subtitle={data.innovators.subtitle}
              images={data.innovators.images}
            />
          ) : (
            <ContLoader />
          )}
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
        {!error && loading ? (
          <Schedule
            caption={data.schedule.caption}
            btnName={data.schedule.btnName}
          />
        ) : (
          <ContLoader />
        )}
      </ErrorBoundary>
      <Footer />
    </div>
  ) : null;
}
export default Contact;
