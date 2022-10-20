import React from 'react';
import EasyToImplement from './easyToImplement/easyToImplement';
import Finance from './finance/finance';
import SimpleUI from './simpleUI/simpleUI';
import classes from './story.module.css';

const Story = ({ storyData }) => {
  const { easyToImplement, simpleUI, finance } = storyData;
  return (
    <div className={classes.story}>
      <EasyToImplement easyToImplementData={easyToImplement} />
      <SimpleUI simpleUIData={simpleUI} />
      <Finance financeData={finance} />
    </div>
  );
};

export default Story;
