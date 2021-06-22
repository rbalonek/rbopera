import React from "react";
import "./CSS/NewEngagements.css";
import Engagement from "../Components/Engagement";

export default function NewEngagements() {
  return (
    <div className="new-engagements-container">
      <h1>New Engagement Page</h1>

      <div className="engagement-list-container">
        <Engagement
          logo="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601215498/robertbalonek.com/Logos/NYCOpera_szn6kj.png"
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
          logo="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221292/PiedmontOpera.png"
          dates="October 30 - Nov 1"
          venue="Steven Center, Winston-Salem NC"
          modalImages={[
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/2_paeohz.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2642_2.JPG_aiepat.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2598.JPG_a7qc3b.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221847/robertbalonek.com/BobLiveShots/IMG_2592.JPG_pqvtap.jpg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601221839/robertbalonek.com/BobLiveShots/IMG_2599_spwf9i.jpg",
          ]}
          reviews={[
            {
              Quote:
                "Steven LaCosse, the stage director, uses the physicality of his singers to great effect, especially Balonek, who might well be the most acrobatic opera singer I have ever seen. His antics are dazzling, and his voice is, too.",
              From: "Winston-Salem Journal",
            },
            {
              Quote:
                "Schaunard, the musician, was beautifully sung by Robert Balonek, whose acting was convincing and comedy hilarious.",
              From: "Classical Voice North Carolina",
            },
          ]}
        />

        <Engagement
          role="Shaunard"
          opera="La Boheme"
          composer="Puccini"
          company="NYC Opera"
          logo="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145907/robertbalonek.com/Logos/Canterbury_yzrqt6.png"
        />

        <Engagement
          role="Owen Wingrave"
          opera="La Boheme"
          composer="Puccini"
          company="NYC Opera"
          logo="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145668/robertbalonek.com/Logos/Lil_Opera_irzsbz.jpg"
        />
      </div>
    </div>
  );
}
