import React from 'react';
import DisplayData from './DisplayData';
import sketch, { GlobalSketchVars } from './Sketch';
import ToBe from './ToBe';
import P5Wrapper from 'react-p5-wrapper';
import ChangeTest from './ChangeTest';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTest: null,
      nextTest: "sketch",
      tests: {
        "sketch": sketch,
        "ToBe": ToBe
      },
    };
    this.sampleButton = this.sampleButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  sampleButton() {
    this.setState({ test: !this.state.test });
  }
  handleChange(event) {
    this.setState({nextTest: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ currentTest: this.state.nextTest })
    // console.log(this.state.currentTest);
  }
  render() {
    return (
      <div>
        <form value={this.state.nextTest} onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
          <select onChange={this.handleChange}>
              <option value="sketch">genetic algorithm</option>
              <option value="ToBe">ToBe</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>


        {/* {console.log(this.state.currentTest)} */}
        <button onClick={this.sampleButton}>Change Test</button>
        {/* count: {this.state.RocketVariables.COUNT} */}
        {/* {console.log(this.state.tests[this.state.currentTest])}; */}
        {this.state.currentTest ? <P5Wrapper sketch={this.state.tests[this.state.currentTest]} /> : null}

        <DisplayData />
        <ChangeTest />
      </div>
    );
  }
}

export default Data;