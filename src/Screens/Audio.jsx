import React from "react";
import "./CSS/Audio.css"

import ReactPlayer from "react-player";

export default function Audio() {
  return (
    <div className="audio-screen">
      <h1>AUDIO</h1>
      <div className="soundcloud-container">
        <ReactPlayer
          className="player"
          height="150px"
          width="400px"
          url="https://soundcloud.com/robert-balonek/handel-saul-excerpts-role-saul"
        />

        <ReactPlayer
        className="player"
          height="150px"
          width="400px"
          url="https://soundcloud.com/robert-balonek/carmina-burana-sampler"
        />

        <ReactPlayer
        className="player"
          height="150px"
          width="400px"
          url="https://soundcloud.com/robert-balonek/haydn-creation-mass-sample"
        />

        <ReactPlayer
        className="player"
          height="150px"
          width="400px"
          url="https://soundcloud.com/robert-balonek/boheme-shaunard-south-dakota-symphony-orchestra-2016"
        />

        <ReactPlayer
        className="player"
          height="150px"
          width="400px"
          url="https://soundcloud.com/robert-balonek/nye-poy-krasavitsa-clip"
        />
      </div>
    </div>
  );
}

//
