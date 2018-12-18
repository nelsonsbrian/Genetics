import React from 'react';
import DisplayData from './DisplayData';
import RocketGA, { GlobalSketchVars } from './RocketGA';
import ToBe from './ToBe';
import P5Wrapper from 'react-p5-wrapper';
import ChangeTest from './ChangeTest';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTest: null,
      nextTest: "RocketGA",
      tests: {
        "RocketGA": RocketGA,
        "ToBe": ToBe
      },
      iterations: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleIterations = this.handleIterations.bind(this);
  }
  handleChange(event) {
    this.setState({ nextTest: event.target.value })
  }
  handleSubmit(event) {
    // event.preventDefault();
    console.log(event.target.value);
    this.setState({ currentTest: event.target.value })
    // console.log(this.state.currentTest);
  }
  handleIterations(newIteration) {
    const newState = [...this.state.iterations, newIteration];
    this.setState({ iterations: newState });
  }

  render() {
    const { nextTest, tests, currentTest, iterations } = this.state;
    return (
      <div className='container'>
        <style jsx>{`
            .col {
              display: inline-block;
              border: 1px white solid;

            }

          `}</style>
        <div className='row'>

          <div className='col'>
          <h3><span className='test-class' value='RocketGA' onClick={this.handleSubmit}>Rockets</span> | <span className='test-class' value='ToBe' onClick={this.handleSubmit}>ToBe</span></h3>

            {/* <form value={nextTest} onSubmit={this.handleSubmit}>
              <label>
                Pick your favorite flavor:
                <select onChange={this.handleChange}>
                  <option value="RocketGA">genetic algorithm</option>
                  <option value="ToBe">ToBe</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form> */}
            {this.state.currentTest ? <P5Wrapper sketch={tests[currentTest]} handleIterations={this.handleIterations} /> : null}
          </div>
          <div className='col'>
            <DisplayData iterations={iterations} />
            <ChangeTest />
          </div>
        </div>
      </div>
    );
  }
}

export default Data;