import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Components/CSS/NewEngagementPopup.css";

export default (props) => (
  <div className="center-modal">
    <div className="modal-carousel-container">
      <Carousel showStatus={false} infiniteLoop showThumbs={false} autoPlay>
        {props.modalImages.map((modalImg) => (
          <a target="_blank" rel="noopener noreferrer" href={modalImg}>
            <div>
              <img className="modal-img" src={modalImg} alt={modalImg} />
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  </div>
);
