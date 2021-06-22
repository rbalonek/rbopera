import React from "react";
import "./CSS/NewEngagementPopup.css";
import Carousel from "../Components/ModalCarousel";

export default function NewEngagementPopup(props) {
  console.log(props.propObj);

  return (
    <div className="engagement-popup_container">
      <h1 style={{ color: "white" }}>{props.role}</h1>

      {props.modalImages && <Carousel modalImages={props.modalImages} />}

      {props.propObj && (
        <div>
          {props.propObj.map((review) => (
            <div>
              <p style={{ color: "white" }}>"{review.Quote}"</p>
              <p style={{ color: "white" }}>- {review.From}</p>
            </div>
          ))}
        </div>
      )}

      <button
        style={{ position: "absolute", bottom: 10 }}
        onClick={props.handleClick}
      >
        CLOSE
      </button>
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
