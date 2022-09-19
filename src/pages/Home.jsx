import React from 'react';
import Clients from '../components/clients/clients';
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
  </div>
);

export default Home;
