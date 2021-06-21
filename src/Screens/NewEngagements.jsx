import React from "react";
import "./CSS/NewEngagements.css";
import Engagement from "../Components/Engagement";

export default function NewEngagements() {
  return (
    <div className="new-engagements-container">
      <h1>New Engagement Page</h1>

      <div className="engagement-list-container">
        <Engagement
          img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601215498/robertbalonek.com/Logos/NYCOpera_szn6kj.png"
          role="Shaunard"
          opera="La Boheme"
          composer="Puccini"
          dates="October 30 - Nov 1"
          venue="Steven Center, Winston-Salem NC"
          tickets="true"
          ticketLink="www.robertbalonek.dev"
          company="NYC Opera"
        />

        <Engagement
          role="Shaunard"
          opera="La Boheme"
          composer="Puccini"
          company="NYC Opera"
          img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145907/robertbalonek.com/Logos/Canterbury_yzrqt6.png"
        />

        <Engagement
          role="Shaunard"
          opera="La Boheme"
          composer="Puccini"
          company="NYC Opera"
          img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221292/PiedmontOpera.png"
        />

        <Engagement
          role="Owen Wingrave"
          opera="La Boheme"
          composer="Puccini"
          company="NYC Opera"
          img="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145668/robertbalonek.com/Logos/Lil_Opera_irzsbz.jpg"
        />
      </div>
    </div>
  );
}
