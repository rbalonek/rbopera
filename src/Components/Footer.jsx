import React from "react";
import "./CSS/Footer.css";

export default function Footer() {
  return (
    <div className="footer--container">
      
      <div className="footer--social_container">
      <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.facebook.com/RBalonek/"
    >
      <img className="facebook" alt="" src="https://static.wixstatic.com/media/b1cd13f9d4dfb1450bbb325285106177.png/v1/fill/w_66,h_66,al_c,q_85,usm_0.66_1.00_0.01/b1cd13f9d4dfb1450bbb325285106177.webp"></img>
        </a>
        <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/robertbalonek"
    >
          <img className="twitter" alt="" src="https://static.wixstatic.com/media/01113281ebb7dfb57a8dc2a02eb1cb92.png/v1/fill/w_66,h_66,al_c,q_85,usm_0.66_1.00_0.01/01113281ebb7dfb57a8dc2a02eb1cb92.webp"></img>
          </a>
      </div>
      <p className="copyright">© 2013 by Robert Balonek</p>
      </div>
  );
}
