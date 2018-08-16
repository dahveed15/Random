import React, { Component } from 'react';
import './Newton.css';
import axios from 'axios';

class Newton extends Component {
  state = {
    operation: '',
    expression: '',
    result: null
  };

  handleSubmit = async e => {
    e.preventDefault();

    const res = await axios.get(
      `https://newton.now.sh/${this.state.operation}/${this.state.expression}`
    );

    this.setState({ result: res.data.result });
  };

  updateOperation = e => {
    this.setState({ operation: e.target.value });
  };

  updateExpression = e => {
    this.setState({ expression: e.target.value });
  };

  reset = () => {
    this.setState({ operation: '', expression: '', result: null });
  };

  render() {
    let result = this.state.result ? (
      <p className="math-result">{this.state.result}</p>
    ) : (
      ''
    );

    return (
      <div className="math-background">
        <div className="inner-robot-div">
          <p>Beautiful Math</p>
        </div>
        <div className="math-hyperlink">
          <a href="https://github.com/aunyks/newton-api">
            Click here to see the available operations/expression help
          </a>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="inner-robot-div newton-input">
            <input
              type="text"
              value={this.state.operation}
              onChange={this.updateOperation}
              placeholder="Enter an operation"
            />
            <input
              type="text"
              value={this.state.expression}
              onChange={this.updateExpression}
              placeholder="Enter an expression"
            />
          </div>
          <div className="inner-robot-div">
            <button type="submit">Create Beautiful Math!</button>
            <button onClick={this.reset}>Reset</button>
          </div>
        </form>
        {result}
      </div>
    );
  }
}

export default Newton;
