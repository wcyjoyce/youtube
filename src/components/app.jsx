import React, { Component } from "react";

import Search from "./search.jsx";
import Videos from "./videos.jsx";
import SelectedVideo from "./selected_video.jsx";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Search />
        <Videos />
        <SelectedVideo />
      </div>
    );
  }
}

export default App;
