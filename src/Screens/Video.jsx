import React from "react";
import "./css/Video.css";

export default function Video() {
  return (
    <div>
      <h1>Video</h1>
      
      <div className="vid_container">
        <div className="vid--left_div">
        <img
        className="vid--img"
        alt=""
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221347/robertbalonek.com/Logos/Screen_Shot_2020-09-27_at_11.40.39_AM_zbyhnn.png"
      ></img>
      <p>
            "...Balonek, who might well be the most acrobatic opera singer I
            have ever seen. His antics are dazzling, and his voice is, too."
      </p>
          <p>-Winston-Salem Journal</p>
        </div>
        <div className="vid--right_div">
        <iframe
        className="shaunard"
        title="shaunard"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SovJfO1mugQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
        </div>
      </div>

      <br /> <br />



      <div className="vid_container">
        <div className="vid--left_div">
          <p className="figaro-text">
            “Figaro (Robert Balonek) burst into the arena with effortless energy
            and bravado, he shook hands with audience members in the first row
            and roamed through the aisles greeting people...the star was Robert
            Balonek. He should be singing Figaro or Lepporello at the Met."
          </p>
          <p>-Classical-Scene.com</p>
        </div>
        <div className="vid--right_div">
          <iframe
            className="largo"
            title="Largo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0c67QhA8B6o"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>


    </div>
  );
}

//
