import React, { Component } from "react";

class Search extends Component {
  state = { address: "" };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    if (this.state.address) {
      this.props.getForecast(this.state.address);
    }
  };

  render() {
    return (
      <div className="search">
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor="address">The address: </label>
          <input
            type="text"
            placeholder="the address"
            id="address"
            name="address"
          />
        </form>
      </div>
    );
  }
}

export default Search;
