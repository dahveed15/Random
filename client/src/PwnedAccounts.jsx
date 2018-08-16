import React, { Component } from 'react';
import axios from 'axios';

class PwnedAccounts extends Component {
  state = {
    account: ''
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { account } = this.state;

    const res = await axios.post('http://localhost:8080/api/account', {
      account
    });
    console.log(res);
  };

  update = e => {
    this.setState({ account: e.target.value });
  };

  reset = () => {
    this.setState({ account: '' });
  };

  render() {
    return (
      <div>
        <div className="inner-robot-div">Check Account</div>
        <form onSubmit={this.handleSubmit}>
          <div className="inner-robot-div">
            <input
              type="text"
              value={this.state.account}
              onChange={this.update}
              placeholder="Enter an Account"
            />
          </div>
          <div className="inner-robot-div">
            <button type="submit">Submit</button>
            <button onClick={this.reset}>Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PwnedAccounts;
