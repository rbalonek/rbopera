import React from "react";
import "./CSS/NewEngagementPopup.css";
import Carousel from "../Components/ModalCarousel";

export default function NewEngagementPopup(props) {
  console.log(props.propObj);

  return (
    <div className="engagement-popup_container">
      <div className="modal-title">
        <h1 className="modal-role">{props.role}</h1>
        <h1 className="modal-opera">{props.opera}</h1>
      </div>

      

      {props.modalImages && <Carousel modalImages={props.modalImages} />}

      {props.reviews && (
        <div className="review-section">
          {props.reviews.map((review) => (
            <div>
              <p style={{ fontWeight: "800" }}>"{review.Quote}"</p>
              <p style={{ marginTop: "-15px" }}>- {review.From}</p>
            </div>
          ))}
        </div>
      )}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button
          className="close-btn"
          style={{ position: "absolute", bottom: 10 }}
          onClick={props.handleClick}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

// {props.modalImages && (
//   <div className="modal-img_container">
//     {props.modalImages.map((modalImg) => (
//       <a target="_blank" rel="noopener noreferrer" href={modalImg}>
//         <img className="modal-img" src={modalImg} alt={modalImg} />
//       </a>
//     ))}
//   </div>
// )}


// <div className="modal-logo-container">
//         <img className="modal-logo" src={props.logo} alt={props.logo} />
//       </div>