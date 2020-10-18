import React from "react";
import MainCarousel from "../Components/MainCarousel";
import Carousel from "../Components/Carousel"
import "./css/Home.css";



export default function Home() {
  return (
    <div className="home-div">
      <div className="carousel-div">
        <Carousel
          img1={"https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350/v1601145556/robertbalonek.com/HomeCarousel/Opera_News_Final_l1hbsb.jpg"}
          img2={"https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350/v1601145555/robertbalonek.com/HomeCarousel/Prospero_1Fade_ezllvo.jpg"}
          img3={"https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_600/v1601307971/robertbalonek.com/HomeCarousel/Figaro_orvkla.jpg"}
          img4={"https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_580/v1601307833/robertbalonek.com/HomeCarousel/2_yltoj1.png"}
          img5={"https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145555/robertbalonek.com/HomeCarousel/Richard_xofmpk.jpg"}
        />
      </div>
      <div className="home_bottom_container">
        <div className="home--left">
          <div className="date-button"><p className="date-text">2020</p></div>
          <p className="home-text">
            The 2020 performances of Rigoletto and Roberts Carnegie Hall debut
            of the Vaughn Williams 5 Mystical songs have been postponed until
            further notice.
          </p>
        </div>
        <div className="home--right">
          <h1 className="review-title">Featured Reviews:</h1>
          <br />
          <p className="review-text">
            “Robert Balonek has a commanding, steely baritone and a direct,
            crystal clear delivery…downright magnificent”
          </p>
          <p className="sitation-review"> -Opera News</p>
          <br />
          <p className="review-text">
            “Robert Balonek was a strong, earnest Prospero.” 
          </p>
          <p className="sitation-review">- The New York
          Times</p>
          <br />
          <p className="review-text">
            "...Balonek, who might well be the most acrobatic opera singer I
            have ever seen. His antics are dazzling, and his voice is, too."
            
          </p>
          <p className="sitation-review">-Winston-Salem Journal</p>
        </div>
      </div>
    </div>
  );
}
