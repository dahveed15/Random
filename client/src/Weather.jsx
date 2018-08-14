import React, { Component } from 'react';
import axios from 'axios';

//fix this component
class Weather extends Component {
  state = {
    location: '',
    forecast: null,
    locationId: null
  };

  handleSubmit = e => {
    e.preventDefault();

    // const location = {
    //   location: this.state.location
    // };

    this.fetchLocationId(this.state.location);
    // axios
    //   .post('/new-user', { location })
    //   .then(response => console.log(response));
  };

  fetchLocationId = async locationName => {
    // const config = {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // };
    //
    // const results = axios.get(
    //   `https://www.metaweather.com/api/location/search/?query=${locationName}`,
    //   config
    // );
    // console.log(results);
    // const data = await results.json();
    // const city = data[0];
    // this.setState({ location: city.title, locationId: city.woeid}, () => {
    //   this.fetchLocationWeatherData(this.state.locationId)
    // })
  };

  update = () => {
    return e => {
      this.setState({ location: e.target.value });
    };
  };

  render() {
    console.log(this.state.location);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a City
            <input
              type="text"
              value={this.state.location}
              onChange={this.update()}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Weather;
