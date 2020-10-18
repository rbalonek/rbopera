import React from "react";
import "./CSS/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header--container">
      <div className="header--title">
        <h1>Robert Balonek</h1>
        <h3 className="header--baritone">Baritone</h3>
      </div>
      <div className="header--nav_links">
        <Link to="/">
          <p className="nav-home">Home</p>
        </Link>
        <Link to="/bio">
          <p className="nav-bio">Bio</p>
        </Link>
        <Link to="/engagements">
          <p className="nav-engagements">Engagements</p>
        </Link>
        <div id="header--media-div">
          <p className="nav-media">Media</p>
          <Link className="header--link_media" to="/audio">
            <span id="header--media-element">Audio</span>
          </Link>
          <br />
          <Link className="header--link_media" to="/video">
            <span id="header--media-element">Video</span>
          </Link>
          <br />
          <Link className="header--link_media" to="/photo">
            <span id="header--media-element">Photo</span>
          </Link>
        </div>
        <Link to="/contact">
          <p className="nav-contact">Contact</p>
        </Link>
      </div>
    </div>
  );
}
