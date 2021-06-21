import React, { useState } from "react";
import "./CSS/Engagement.css";
import NewEngagementPopup from "../Components/NewEngagementPopup";

export default function Engagement(props) {
  const [show, setShow] = useState("hide");

  const handleClick = () => {
    setShow("hide");
  };

  return (
    <div className="engagement-container">
      <img className="engagement-img" src={props.img} alt={props.title} />

      <div className="engagement-body">
        <p className="role-name ">{props.role}</p>
        <p className="opera-name">{props.opera}</p>
      </div>

      <p className="composer-name">{props.composer}</p>

      <div className="performance-info-container">
        <p>{props.dates}</p>
        <p>{props.venue}</p>
      </div>

      {props.tickets === "true" ? (
        <h3 className="tickets">Tickets</h3>
      ) : (
        <>
          <p
            onClick={() => {
              setShow("show");
            }}
            className="more-info"
          >
            More Info
          </p>

          <div className={show}>
            <div>
              <NewEngagementPopup handleClick={handleClick} role={props.role} />
            </div>
          </div>
        </>
      )}

      <h1 className="company-name">{props.company}</h1>
    </div>
  );
}

// <div className={show} onclick={() => setShow("hide")}>
// <NewEngagementPopup />
// </div>

// <a target="_blank" rel="noopener noreferrer" href={props.ticketLink}>
// </a>
