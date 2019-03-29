import React, { Component } from "react";
import Video from "./video.jsx";

const Videos = (props) => {
  console.log(props.videos);

  const videos = props.videos.map((video) => {
    return <Video key={video.id.videoId} video={video} />
  });

  return <div className="videos">{videos}</div>
}

export default Videos;
