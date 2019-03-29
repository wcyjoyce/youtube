import React, { Component } from "react";

import Search from "./search.jsx";
import Videos from "./videos.jsx";
import SelectedVideo from "./selected_video.jsx";
import youtube from "../api/youtube.jsx";

class App extends Component {
  state = { videos: [] };

  // YouTube API #1: handling requests with response
  handleSearchSubmit = (term) => {
    youtube.get("/search", {
      params: { q: term }
    }).then((response) => {
      this.setState({ videos: response.data.items });
    });
  };

  // YouTube API #2: handling requests with Async
  // handleSearchSubmit = async term => {
  //   const response = await youtube.get("/search", {
  //     params: { q: term }
  //   });
  //   this.setState({ videos: response.data.items });
  // }

  render() {
    return (
      <div className="ui container">
        <Search onSubmit={this.handleSearchSubmit} />
        {this.state.videos.length} videos
        <Videos videos={this.state.videos} />
        <SelectedVideo />
      </div>
    );
  }
}

export default App;
