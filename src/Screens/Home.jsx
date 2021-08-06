import React from "react";
import Carousel from "../Components/Carousel";
import "./CSS/Home.css";

import imageOne from "../images/Opera News Final.jpg";
import BohemeOperaImg from "../images/BohemeOperaNJLogo.png";
import OperaModesto from "../images/Opera Modesto.png";

import AdSense from "react-adsense";

export default function Home() {
  return (
    <div className="home-div">
      <div className="carousel-div">
        <Carousel
          img1={imageOne}
          img2={
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350/v1601145555/robertbalonek.com/HomeCarousel/Prospero_1Fade_ezllvo.jpg"
          }
          img3={
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_600/v1601307971/robertbalonek.com/HomeCarousel/Figaro_orvkla.jpg"
          }
          img4={
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_350,w_580/v1601307833/robertbalonek.com/HomeCarousel/2_yltoj1.png"
          }
          img5={
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145555/robertbalonek.com/HomeCarousel/Richard_xofmpk.jpg"
          }
        />
      </div>
      <div className="home_bottom_container">
        <div className="home--left">
          <div
            style={{ position: "relative", top: "-20px" }}
            className="date-button"
          >
            <p className="date-text">2021</p>
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.operaonthejames.org/shows"
          >
            <img
              style={{ height: "100px", position: "relative", top: "-10px" }}
              src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1624389679/robertbalonek.com/Performances/OOTJ%20Figaro/OOTJ_l2gjb0.webp"
              alt="OOTJ"
            />
          </a>

          <div style={{ position: "relative", top: "-10px" }}>
            <p>
              Role: <span style={{ fontWeight: "900" }}>Figaro</span>
              <br />
              Date: <span style={{ fontWeight: "900" }}>Nov 12-14</span>
            </p>
          </div>
          <hr style={{ position: "relative", top: "-10px" }} />

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.bohemeopera.com/mainstage"
          >
            <img
              style={{ height: "100px", position: "relative", top: "-20px" }}
              src={BohemeOperaImg}
              alt="Boheme"
            />
          </a>
          <div style={{ position: "relative", top: "-50px" }}>
            <p>
              Role: <span style={{ fontWeight: "900" }}>Rigoletto</span>
              <br />
              Date: <span style={{ fontWeight: "900" }}>TBA Fall 2021</span>
            </p>
          </div>
          <hr style={{ position: "relative", top: "-50px" }} />

          <div
            style={{ position: "relative", top: "-50px" }}
            className="date-button"
          >
            <p className="date-text">2022</p>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.operamodesto.org/concerts/"
          >
            <img
              style={{ height: "100px", position: "relative", top: "-50px" }}
              src={OperaModesto}
              alt="Boheme"
            />
          </a>
          <div style={{ position: "relative", top: "-60px" }}>
            <p>
              Role:{" "}
              <span style={{ fontWeight: "900" }}>Marcello (La Boheme)</span>
              <br />
              Date: <span style={{ fontWeight: "900" }}>April 29-May 1st</span>
            </p>
          </div>
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
          <p className="sitation-review">- The New York Times</p>
          <br />
          <p className="review-text">
            "...Balonek, who might well be the most acrobatic opera singer I
            have ever seen. His antics are dazzling, and his voice is, too."
          </p>
          <p className="sitation-review">-Winston-Salem Journal</p>
        </div>
      </div>
      <AdSense.Google
        client="ca-pub-4689705312531717"
        slot="2939147667"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </div>
  );
}
