import React from 'react';
import classes from './imgLink.module.css';
import { ReactComponent as FacebookLogo } from '../../../img/footer/f.svg';
import { ReactComponent as TweeterLogo } from '../../../img/footer/tw.svg';
import { ReactComponent as LinkedinLogo } from '../../../img/footer/ln.svg';

function ImgLink() {
  return (
    <div>
      <div className={classes.imgLink}>
        <FacebookLogo className={classes.imgLinkSvg} />
      </div>
      <div className={classes.imgLink}>
        <TweeterLogo className={classes.imgLinkSvg} />
      </div>
      <div className={classes.imgLink}>
        <LinkedinLogo className={classes.imgLinkSvg} />
      </div>
    </div>
  );
}

export default ImgLink;
