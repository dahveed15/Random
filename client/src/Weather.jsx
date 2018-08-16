import React, { Component } from 'react';
import './Weather.css';
import axios from 'axios';

class Weather extends Component {
  state = {
    location: '',
    weatherInfo: null
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { location } = this.state;

    const res = await axios.post('http://localhost:8080/api/weather', {
      location
    });

    let weather = res.data.weather;
    let weatherInfo = [];

    if (weather) {
      while (weather.length !== 0) {
        let currentDay = weather.shift();
        let temp = [];

        temp = temp.concat(
          currentDay.applicable_date,
          currentDay.humidity,
          currentDay.max_temp,
          currentDay.min_temp,
          currentDay.weather_state_name
        );
        weatherInfo.push(temp);
      }
    }

    this.setState({ weatherInfo });
  };

  update = e => {
    this.setState({ location: e.target.value });
  };

  reset = () => {
    this.setState({ location: '' });
  };

  //figure out how to use this in your component
  // convertDateFormat = str => {
  //   const months = {
  //     '01': 'January',
  //     '02': 'February',
  //     '03': 'March',
  //     '04': 'April',
  //     '06': 'June',
  //     '05': 'May',
  //     '07': 'July',
  //     '08': 'August',
  //     '09': 'September',
  //     '10': 'October',
  //     '11': 'November',
  //     '12': 'December'
  //   };
  //
  //   let month = str.slice(5, 7);
  //   let day = str.slice(8);
  //
  //   let year = str.slice(0, 4);
  //
  //   return `${months[month]} ${parseInt(day)}, ${year}`;
  // };

  render() {
    let weather;
    // console.log(this.convertDateFormat);
    //<p>{this.convertDateFormat(currentDay[0])}</p>

    const months = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    };

    if (this.state.weatherInfo) {
      weather = this.state.weatherInfo.map(function(currentDay, index) {
        return (
          <div key={index}>
            <p>
              {months[currentDay[0].slice(5, 7)]}{' '}
              {parseInt(currentDay[0].slice(8))}, {currentDay[0].slice(0, 4)}
            </p>
            <ul>
              <li>Humidity: {currentDay[1]}</li>
              <li>
                <p>High:</p>
                <p>{(currentDay[2] * 1.8 + 32).toFixed(2)} Farenheit</p>
                <p>{currentDay[2].toFixed(2)} Celsius</p>
              </li>
              <li>
                <p>Low:</p>
                <p>{(currentDay[3] * 1.8 + 32).toFixed(2)} Farenheit</p>
                <p>{currentDay[3].toFixed(2)} Celsius</p>
              </li>
              <li>Weather Type: {currentDay[4]}</li>
            </ul>
          </div>
        );
      });
    } else {
      weather = '';
    }

    return (
      <div className="weather-background">
        <div className="inner-robot-div">Check the Weather</div>
        <form onSubmit={this.handleSubmit}>
          <div className="inner-robot-div">
            <input
              type="text"
              value={this.state.location}
              onChange={this.update}
              placeholder="Enter a City"
            />
          </div>
          <div className="inner-robot-div">
            <button type="submit">Submit</button>
            <button onClick={this.reset}>Reset</button>
          </div>
        </form>
        <div className="weather-info">{weather}</div>
      </div>
    );
  }
}

export default Weather;
