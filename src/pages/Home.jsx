import React from 'react';
import Clients from '../components/clients/clients';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navigation from '../components/nav/navigation';
import Schedule from '../components/schedule/schedule';
import Story from '../components/story/story';

const Home = () => (
  <div>
    <Navigation />
    <Hero />
    <Clients />
    <Story />
    <Schedule />
    <Footer />
  </div>
);

export default Home;
