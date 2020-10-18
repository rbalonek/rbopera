import React from "react";
import { Link } from "react-router-dom";
import EngagementBlog from "../Components/EngagementBlog";
import "./css/Engagements.css";


export default function Engagements() {
  return (
    <div className="engagements_container">
      <h1>ENGAGEMENTS</h1>
      <div id="engagement-div">
        <EngagementBlog
          title="Shaunard - Boheme - NYC Opera"
          img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601215498/robertbalonek.com/Logos/NYCOpera_szn6kj.png"
        />
        <span id="engagement-element">
          <p>LA BOHÈME - PUCCINI</p>
          <p>Role: Shaunard</p>
          <p>NYCO</p>
        </span>
      </div>

      <div id="engagement-div">
        <EngagementBlog
          title="Saul -Saul(Handel)  - Canterbury Choral Society"
          img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145907/robertbalonek.com/Logos/Canterbury_yzrqt6.png"
        />
        <span id="engagement-element">
          <p>Handel - Saul</p>
          <p>Role: Saul</p>
          <p>
            Church of the Heavenly Rest – 90th Street and 5th Avenue March 3,
            2019 at 3pm
          </p>
          
        </span>
      </div>

      <div id="engagement-div">
        <EngagementBlog
          title="Shaunard - Boheme - Piedmont Opera"
          img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221347/robertbalonek.com/Logos/Screen_Shot_2020-09-27_at_11.40.39_AM_zbyhnn.png"
        />
        <span id="engagement-element">
          <p>LA BOHÈME - PUCCINI</p>
          <p>Role: Shaunard</p>
          <p>Piedmont Opera</p>
          <h2>Reviews:</h2>
          <p>
            "Steven LaCosse, the stage director, uses the physicality of his
            singers to great effect, especially Balonek, who might well be the
            most acrobatic opera singer I have ever seen. His antics are
            dazzling, and his voice is, too."- Winston-Salem Journal
          </p>
          <p>
            "Schaunard, the musician, was beautifully sung by Robert Balonek,
            whose acting was convincing and comedy hilarious."-Classical Voice
            North Carolina
          </p>
          <div className="opera-blog-pics">
            <img
              className="opera-blog-img"
              alt=""
              src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2592.JPG_pqvtap.jpg"
            ></img>
            <img
              className="opera-blog-img"
              alt=""
              src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2598.JPG_a7qc3b.jpg"
            ></img>
            <img
              className="opera-blog-img"
              alt=""
              src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/2_paeohz.png"
            ></img>
            <img
              className="opera-blog-img"
              alt=""
              src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2642_2.JPG_aiepat.jpg"
            ></img>
          </div>
        </span>
      </div>

      <div id="engagement-div">
        <EngagementBlog
          title="Historicus - The story of St. Francis - Ariani - Boheme - NYC Opera"
          img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145907/robertbalonek.com/Logos/Canterbury_yzrqt6.png"
        />
        <span id="engagement-element">
          <p>The Story of St. Francis - Arian</p>
          <p>Role: Historicus</p>
          <p>Canterbury Choral Society</p>
        </span>
      </div>
    </div>
  );
}
