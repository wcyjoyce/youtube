import React, { Component } from "react";

import Search from "./search.jsx";
import Videos from "./videos.jsx";
import SelectedVideo from "./selected_video.jsx";
import youtube from "../api/youtube.jsx";

class App extends Component {
  state = { videos: [], selected: null };

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

  selectVideo = (video) => {
    console.log("Selected video: ", video.snippet.title);
  }

  render() {
    return (
      <div className="ui container">
        <Search onSubmit={this.handleSearchSubmit} />
        <div className="content">
          <SelectedVideo />
          <Videos selectVideo={this.selectVideo} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
