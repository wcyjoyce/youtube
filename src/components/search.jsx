import React, { Component } from "react";

class Search extends Component {
  state = { term: "" };

  handleChange = (event) => {
    this.setState({ term: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              placeholder="Search"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
