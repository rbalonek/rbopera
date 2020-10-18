import React from "react";
import Carousel from "../Components/Carousel"

import "./CSS/Photo.css"

export default function Photo() {
  return (
    <div className="photo-screen-container">
      <h1>Photo</h1>
      <h2>Headshots</h2>
      <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.shirintinati.com/"
    >
        <p>by: Shirin Tinati</p>
      </a>
      <div className="headshot-container">
        <Carousel
        dynamicHeight={true}
        img1={"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145823/robertbalonek.com/Headshots/2_joqnwo.jpg"}
        img2={"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145825/robertbalonek.com/Headshots/3_tffta2.jpg"}
        img3={"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145846/robertbalonek.com/Headshots/IMG_9760_copy_uko8xu.jpg"}
        img4={"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145832/robertbalonek.com/Headshots/CoverPg_jfbfqm.jpg"}
        img5={"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145856/robertbalonek.com/Headshots/IMG_9655_copy_lxmkxk.jpg"}
        />
        </div>
      <br />
      <h2>Live Pics</h2>
      <Carousel
        dynamicHeight={true}
        img1={"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145742/robertbalonek.com/BobLiveShots/IMG_7980_copy.JPG_bxtgpy.jpg"}
        img2={"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145741/robertbalonek.com/BobLiveShots/Figaro_Chelsea_20_h3jjy1.jpg"}
        img3={"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221839/robertbalonek.com/BobLiveShots/IMG_2599_spwf9i.jpg"}
        img4={"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145741/robertbalonek.com/BobLiveShots/IMG_7955.JPG_c8m0ib.jpg"}
        img5={"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145741/robertbalonek.com/BobLiveShots/Blitch_1_ovmrws.jpghttps://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145741/robertbalonek.com/BobLiveShots/Figaro_90210_Footsie_pneljc.jpg"}
        />
    </div>
  );
}
