import React, { Component } from "react";

const Video = (props) => {
  return (
    <div className="video" onClick={() => props.selectVideo(props.video)}>
      <img className="thumbnail" src={props.video.snippet.thumbnails.medium.url} />
      <div className="info">
        <div className="title">{props.video.snippet.title}</div>
        <div className="channel">{props.video.snippet.channelTitle}</div>
      </div>
    </div>
  );
}

export default Video;
