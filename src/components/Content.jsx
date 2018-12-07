import React from 'react';
import sketch from './Sketch';
import P5Wrapper from 'react-p5-wrapper';

function Content() {

  return(
    <div>
      <P5Wrapper sketch={sketch} />
      <P5Wrapper sketch={sketch} />
    </div>
  );
}

export default Content;