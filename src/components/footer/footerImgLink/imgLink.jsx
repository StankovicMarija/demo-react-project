/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './imgLink.module.css';
import { ReactComponent as FacebookLogo } from '../../../img/footer/f.svg';
import { ReactComponent as TweeterLogo } from '../../../img/footer/tw.svg';
import { ReactComponent as LinkedinLogo } from '../../../img/footer/ln.svg';
import Link from '../../nav/link';

function ImgLink() {
  return (
    <div>
      <Link to="" className={classes.imgLink}>
        <FacebookLogo className={classes.imgLinkSvg} />
      </Link>
      <Link to="" className={classes.imgLink}>
        <TweeterLogo className={classes.imgLinkSvg} />
      </Link>
      <Link to="" className={classes.imgLink}>
        <LinkedinLogo className={classes.imgLinkSvg} />
      </Link>
    </div>
  );
}

export default ImgLink;
