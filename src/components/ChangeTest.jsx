import React from 'react';
import { GlobbalSketchVest } from './RocketGA';

class ChangeTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test1: {
        CANVAS_HEIGHT: 400,
        CANVAS_WIDTH: 800,
        POPULATION_SIZE: 25,
        LIFESPAN: 300,
        COUNT: 0,
        ROCKETS: [],
        GENERATION: 1,
        MAX_FIT: 0,
        AVG_FIT: 0,
      },
      content: ''
    };
    this._content = null;
    this.handleChange = this.handleChange.bind(this);
    this.reRunTest = this.reRunTest.bind(this);
  }
  handleChange(event) {
    this.setState({ content: event.target.value });
    console.log(GlobbalSketchVest);
    GlobbalSketchVest.LIFESPAN = event.target.value;
  }

  reRunTest(event) {
    event.preventDefault();
    console.log(this._content.value);
    // props.addPost({
    //   content: _content.value,
    // });
    this._content.value = '';
  }

  render() {
    return (
      <div>
        {/* {"Count: " + GlobbalSketchVest.COUNT}
        {this.state.content}
        <form onSubmit={this.reRunTest}>
          Enter LifeSpan:
          <input
            type="text"
            id="content"
            value={this.state.content}
            onChange={this.handleChange}
            ref={input => {
              this._content = input;
            }}
          />
          <button className="btn btn-primary" type="submit">
            Post
          </button>
        </form> */}
      </div>
    );
  }
}

export default ChangeTest;