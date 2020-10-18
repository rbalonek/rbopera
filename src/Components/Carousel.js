import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default (props) => (
  <Carousel
  showStatus={false}
  infiniteLoop
  showThumbs= {false}
    autoPlay>
    <div>
      <img
        alt=""
        src={props.img1}
      />
    </div>
    <div>
      <img
        alt=""
        src={props.img2}
      />
    </div>
    <div>
      <img
        alt=""
        src={props.img3}
      />
    </div>
    <div>
      <img
        alt=""
        src={props.img4}
      />
    </div>
    <div>
      <img
        alt=""
        src={props.img5}
      />
    </div>
  </Carousel>
);
