import React from "react";
import "./CSS/NewEngagementPopup.css";

export default function NewEngagementPopup(props) {
  // console.log(props.modalImages);

  return (
    <div className="engagement-popup_container">
      <h1 style={{ color: "white" }}>{props.role}</h1>
      <button onClick={props.handleClick}>CLOSE</button>

      {props.modalImages && (
        <div className="modal-img_container">
          {props.modalImages.map((modalImg) => (
            <a target="_blank" rel="noopener noreferrer" href={modalImg}>
              <img className="modal-img" src={modalImg} alt={modalImg} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
