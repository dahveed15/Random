import React, { Component } from 'react';
import './Robot.css';

class RoboHash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roboInfo: '',
      roboHash: null
    };
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    this.setState({ roboHash: this.state.roboInfo });
  }

  update() {
    return e => {
      this.setState({ roboInfo: e.target.value });
    };
  }

  reset() {
    this.setState({ roboInfo: '' });
    this.setState({ roboHash: null });
  }

  render() {
    //this will give me the random robot
    //I need to figure out a way to generate the robot only when I type something
    //and click a button
    // <img src="https://robohash.org/${customText}.png" />
    let robot;
    let text = `https://robohash.org/${this.state.roboHash}.png`;

    if (this.state.roboInfo === this.state.roboHash) {
      robot = <img className="center-robot-image" src={text} />;
    }

    return (
      <div className="robo-background">
        <div className="inner-robot-div">Robot Fun</div>
        <div className="inner-robot-div">
          <input
            className="robo-input"
            type="text"
            value={this.state.roboInfo}
            onChange={this.update()}
            placeholder="Enter some text"
          />
        </div>
        <div className="inner-robot-div">
          <div>
            <button className="robo-btn" onClick={this.handleClick}>
              Create a Robot!
            </button>
            <button className="robo-btn" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
        <div />
        {robot}
      </div>
    );
  }
}

export default RoboHash;
