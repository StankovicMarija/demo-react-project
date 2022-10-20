import React from 'react';
import Clients from '../components/clients/clients';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navigation from '../components/nav/navigation';
import Schedule from '../components/schedule/schedule';
import Story from '../components/story/story';
import homeData from '../data/home';

const Home = () => {
  const { hero, clients, story, schedule, subscriptionForm } = homeData;

  return (
    <div>
      <Navigation scheduleData={schedule} subscriptionForm={subscriptionForm} />
      <Hero heroData={hero} subscriptionForm={subscriptionForm} />
      <Clients clientsData={clients} />
      <Story storyData={story} />
      <Schedule scheduleData={schedule} subscriptionForm={subscriptionForm} />
      <Footer />
    </div>
  );
};
export default Home;
