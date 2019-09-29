import React, { Component } from "react";
import Search from "./Components/Search";

class App extends Component {
  state = {
    data: {},
    address: ""
  };

  getForecast = async query => {
    const res = await fetch(
      `https://trd-weather-api.herokuapp.com/getforecast?q=${query}`
    );
    const data = await res.json();
    this.setState({ data, address: query });
  };

  render() {
    const { address, data } = this.state;
    let message = "";
    if (data.currently) {
      message = `In ${address}, It is ${data.currently.temperature}°C. There is ${data.currently.precipPorbability}% chance of rain.`;
    } else {
      message = "";
    }
    return (
      <div>
        <Search getForecast={this.getForecast} />
        <p>{message}</p>
      </div>
    );
  }
}

export default App;
