import React from 'react';
import EasyToImplement from './easyToImplement/easyToImplement';
import Finance from './finance/finance';
import SimpleUI from './simpleUI/simpleUI';
import classes from './story.module.css';

const Story = () => (
  <div className={classes.story}>
    <EasyToImplement />
    <SimpleUI />
    <Finance />
  </div>
);

export default Story;
