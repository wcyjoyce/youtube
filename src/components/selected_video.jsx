import React, { Component } from "react";

const selectedVideo = (props) => {
  if (!props.video) {
    return <div className="selected">Loading...</div>
  }

  const videoUrl = `https://www.youtube.com/embed/${props.video.id.videoId}`

  return (
    <div className="selected">
      <div className="ui embed"><iframe src={videoUrl} title="Video Player"></iframe></div>
      <h1>{props.video.snippet.title}</h1>
      <h4>{props.video.snippet.channelTitle}</h4>
      <div className="description">{props.video.snippet.description}</div>
    </div>
  );
}

export default selectedVideo;
