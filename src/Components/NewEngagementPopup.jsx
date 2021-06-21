import React from "react";
import "./CSS/NewEngagementPopup.css";

export default function NewEngagementPopup(props) {
  return (
    <div className="engagement-popup_container">
      <h1 style={{ color: "white" }}>{props.role}</h1>
      <button onClick={props.handleClick}>CLOSE</button>
    </div>
  );
}
