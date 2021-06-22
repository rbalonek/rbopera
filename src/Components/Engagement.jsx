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
          propObj={props.propObj}
          modalImages={props.modalImages}
          handleClick={closeModal}
          role={props.role}
        />
      </Modal>
    </div>
  );
}
