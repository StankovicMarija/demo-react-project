import React, { useState, useEffect } from 'react';
import Clients from '../components/clients/clients';
import ErrorBoundary from '../components/errorBoundary';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navigation from '../components/nav/navigation';
import Schedule from '../components/schedule/schedule';
import Story from '../components/story/story';

const Home = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch('data/home.json')
      .then(res => res.json())
      .then(result => setHomeData(result));
  }, []);

  return homeData ? (
    <div>
      <ErrorBoundary>
        <Navigation btnName={homeData.schedule.btnName} />
        <Hero
          caption={homeData.hero.caption}
          mobileImage={homeData.hero.mobileImage}
          subText={homeData.hero.subText}
          subTextLink={homeData.hero.subTextLink}
          btnName={homeData.hero.btnName}
        />
        <Clients clientsData={homeData.clients} />
        <Story
          easyToImplement={homeData.story.easyToImplement}
          simpleUI={homeData.story.simpleUI}
          finance={homeData.story.finance}
        />
        <Schedule
          caption={homeData.schedule.caption}
          btnName={homeData.schedule.btnName}
        />
        <Footer />
      </ErrorBoundary>
    </div>
  ) : null;
};
export default Home;
