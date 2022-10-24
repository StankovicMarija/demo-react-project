import React from 'react';
import classes from './innovators.module.css';

function Innovators({ subtitle, images }) {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.text}>{subtitle}</h3>
      <div className={classes.logo}>
        {images.map(({ title, imgSrc }) => (
          <img src={imgSrc} alt={title} key={title} />
        ))}
      </div>
    </div>
  );
}

export default Innovators;
