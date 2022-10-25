import React from 'react';
import Clients from '../components/clients/clients';
import ErrorBoundary from '../components/errorBoundary';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navigation from '../components/nav/navigation';
import Schedule from '../components/schedule/schedule';
import Story from '../components/story/story';
import useFetch from '../components/useFetch';
import ContLoader from '../components/contentLoader';

const Home = () => {
  const { data, error, loading } = useFetch('data/home.json');

  return data ? (
    <div>
      {error && !loading && <ContLoader />}
      <ErrorBoundary>
        <Navigation btnName={data.schedule.btnName} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero
          caption={data.hero.caption}
          mobileImage={data.hero.mobileImage}
          subText={data.hero.subText}
          subTextLink={data.hero.subTextLink}
          btnName={data.hero.btnName}
        />
      </ErrorBoundary>
      <ErrorBoundary>
        <Clients clientsData={data.clients} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Story
          easyToImplement={data.story.easyToImplement}
          simpleUI={data.story.simpleUI}
          finance={data.story.finance}
        />
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
};

export default Home;
