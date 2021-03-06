import React, { useState } from "react";
import Modal from "react-modal";
import "./CSS/Engagement.css";
import NewEngagementPopup from "../Components/NewEngagementPopup";

export default function Engagement(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="engagement-container">
      

      <div className="engagement-body">
        <p className="role-name ">{props.role}</p>
        <p className="opera-name">{props.opera}</p>
      </div>

      <p className="composer-name">{props.composer}</p>

      <img className="engagement-img" src={props.logo} alt={props.title} />

      <div className="performance-info-container">
        <p>{props.dates}</p>
        <p>{props.venue}</p>
      </div>

      {props.tickets === "true" ? (
        <a href={props.ticketLink} target="_blank" rel="noopener noreferrer" >
          <h3 className="tickets">Tickets</h3>
        </a>
      ) : (
        <>
          <p onClick={openModal} className="more-info">
            More Info
          </p>
        </>
      )}

      <h1 className="company-name">{props.company}</h1>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        className="Modal"
        contentLabel="Modal"
      >
        <NewEngagementPopup
          reviews={props.reviews}
          modalImages={props.modalImages}
          handleClick={closeModal}
          role={props.role}
          opera={props.opera}
          logo={props.logo}
        />
      </Modal>
    </div>
  );
}
