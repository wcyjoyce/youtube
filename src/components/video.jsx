import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <div className="video">
        {this.props.video.id.videoId}
      </div>
    );
  }
}

export default Video;
