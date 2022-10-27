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
      <ErrorBoundary>
        <Navigation btnName={data.schedule.btnName} />
      </ErrorBoundary>
      <ErrorBoundary>
        {!error && loading ? (
          <Hero
            caption={data.hero.caption}
            mobileImage={data.hero.mobileImage}
            subText={data.hero.subText}
            subTextLink={data.hero.subTextLink}
            btnName={data.hero.btnName}
          />
        ) : (
          <ContLoader />
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        <Clients clientsData={data.clients} />
      </ErrorBoundary>
      <ErrorBoundary>
        {!error && loading ? (
          <Story
            easyToImplement={data.story.easyToImplement}
            simpleUI={data.story.simpleUI}
            finance={data.story.finance}
          />
        ) : (
          <ContLoader />
        )}
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
};

export default Home;
