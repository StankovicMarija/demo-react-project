import React from 'react';
import ContentLoader from 'react-content-loader';
import classes from './contentLoader.module.css';

const ContLoader = () => (
  <ContentLoader
    className={classes.skeleton}
    height={140}
    speed={3}
    backgroundColor="#edf3f8"
    foregroundColor="#36536b40"
    viewBox="0 0 380 70"
  >
    <rect x="10" y="17" rx="4" ry="4" width="100%" height="20" />
    <rect x="10" y="40" rx="3" ry="3" width="100%" height="20" />
    <rect x="10" y="40" rx="3" ry="3" width="100%" height="20" />
  </ContentLoader>
);

export default ContLoader;
