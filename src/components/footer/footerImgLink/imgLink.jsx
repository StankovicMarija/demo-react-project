import React from 'react';
import { ReactComponent as FacebookLogo } from '../../../img/footer/f.svg';
import tweet from '../../../img/footer/tw.svg';
import ln from '../../../img/footer/ln.svg';
import classes from './imgLink.module.css';

function ImgLink() {
  return (
    <div>
      <div className={classes.imgLink}>
        <FacebookLogo className={classes.imgLinkSvg} />
      </div>
      <div className={classes.imgLink}>
        <img src={tweet} alt="tweeter" />
      </div>
      <div className={classes.imgLink}>
        <img src={ln} alt="linkedin" />
      </div>
    </div>
  );
}

export default ImgLink;
