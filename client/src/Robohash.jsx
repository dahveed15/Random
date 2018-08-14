import React, { Component } from 'react';

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
      robot = <img src={text} />;
    }

    return (
      <div>
        <label>
          Enter some text
          <input
            type="text"
            value={this.state.roboInfo}
            onChange={this.update()}
          />
        </label>
        <button onClick={this.handleClick}>Create a Robot!</button>
        <button onClick={this.reset}>Reset</button>
        <div />
        {robot}
      </div>
    );
  }
}

export default RoboHash;
