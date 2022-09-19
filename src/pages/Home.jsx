import React from 'react';
import Clients from '../components/clients/clients';
import Hero from '../components/hero/hero';
import Navigation from '../components/nav/navigation';
import Story from '../components/story/story';

const Home = () => (
  <div>
    <Navigation />
    <Hero />
    <Clients />
    <Story />
  </div>
);

export default Home;
