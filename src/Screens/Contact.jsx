import React from "react";
import "./CSS/Contact.css";

export default function Contact() {
  return (
    <div className="contact--container">
      <div className="contact_left">
        <h2 className="contact-title">Contact</h2>
        <h1 className="peter">Peter Randsman</h1>
        <p className="agent-name">Randsman Artists Management</p>
        <p>400 West 43rd Street Apt. # 18 E</p>
        <p className="city">New York, NY 10036</p>
        <p>Office: 212-244-5874</p>
        <p>Cell: 917-494-6654</p>
        <p>randsman@aol.com</p>
        <p>http://www.randsman.com</p>
        <br />
        <p>robertbalonek@gmail.com</p>
        <p>585-721-2210</p>
      </div>
      <div className="contact_right">
        <img
          className="contact_right--img"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145825/robertbalonek.com/Headshots/3_tffta2.jpg"
          alt="contact-img"
        ></img>
      </div>
    </div>
  );
}
