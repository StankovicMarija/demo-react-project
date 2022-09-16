import React from 'react';
import Clients from '../components/clients/clients';
import Hero from '../components/hero/hero';
import Navigation from '../components/nav/navigation';

const Home = () => (
  <div>
    <Navigation />
    <Hero />
    <Clients />
  </div>
);

export default Home;
