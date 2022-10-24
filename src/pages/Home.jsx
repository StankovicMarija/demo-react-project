import React from 'react';
import Clients from '../components/clients/clients';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navigation from '../components/nav/navigation';
import Schedule from '../components/schedule/schedule';
import Story from '../components/story/story';
import homeData from '../data/home';

const Home = () => {
  const { hero, clients, story, schedule } = homeData;

  return (
    <div>
      <Navigation scheduleData={schedule} />
      <Hero
        caption={hero.caption}
        mobileImage={hero.mobileImage}
        subText={hero.subText}
        subTextLink={hero.subTextLink}
        btnName={hero.btnName}
      />
      <Clients clientsData={clients} />
      <Story
        easyToImplement={story.easyToImplement}
        simpleUI={story.simpleUI}
        finance={story.finance}
      />
      <Schedule caption={schedule.caption} btnName={schedule.btnName} />
      <Footer />
    </div>
  );
};
export default Home;
