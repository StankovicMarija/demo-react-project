import React from 'react';
import Clients from '../components/clients/clients';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navigation from '../components/nav/navigation';
import Story from '../components/story/story';

const Home = () => (
  <div>
    <Navigation />
    <Hero />
    <Clients />
    <Story />
    <Footer />
  </div>
);

export default Home;
