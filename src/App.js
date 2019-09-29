import React, { Component } from "react";
import Search from "./Components/Search";

class App extends Component {
  state = {
    data: null
  };

  getForecast = async query => {
    const res = await fetch(
      `https://trd-weather-api.herokuapp.com/getforecast?q=${query}`
    );
    const data = await res.json();
    this.setState({ data });
  };

  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default App;
