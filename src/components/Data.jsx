import React from 'react';
import DisplayData from './DisplayData';
import sketch, { GlobalSketchVars } from './Sketch';
import P5Wrapper from 'react-p5-wrapper';


class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RocketVariables: {
        POPULATION_SIZE: GlobalSketchVars.POPULATION_SIZE,
        LIFESPAN: GlobalSketchVars.LIFESPAN,
        COUNT: GlobalSketchVars.COUNT,
        ROCKETS: GlobalSketchVars.ROCKETS
      }
    };
    console.log(this.state);
  }
  render() {
    return (
      <div>
        {/* count: {this.state.RocketVariables.COUNT} */}
        <P5Wrapper sketch={sketch} />
        <DisplayData />
      </div>
    );
  }
}

export default Data;