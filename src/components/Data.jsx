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
    event.preventDefault();
    this.setState({ currentTest: this.state.nextTest })
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
              background-color: lightblue;
            }
          `}</style>
        <div className='row'>

          <div className='col'>
            <form value={nextTest} onSubmit={this.handleSubmit}>
              <label>
                Pick your favorite flavor:
          <select onChange={this.handleChange}>
                  <option value="RocketGA">genetic algorithm</option>
                  <option value="ToBe">ToBe</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
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