import React from 'react';
import EasyToImplement from './easyToImplement/easyToImplement';
import Finance from './finance/finance';
import SimpleUI from './simpleUI/simpleUI';
import classes from './story.module.css';

const Story = ({ easyToImplement, simpleUI, finance }) => (
  <div className={classes.story}>
    <EasyToImplement
      caption={easyToImplement.caption}
      text={easyToImplement.text}
      code={easyToImplement.code}
    />
    <SimpleUI
      caption={simpleUI.caption}
      text={simpleUI.text}
      imgLeft={simpleUI.imgLeft}
      imgRight={simpleUI.imgRight}
      descr={simpleUI.descr}
    />
    <Finance finance={finance} />
  </div>
);

export default Story;
