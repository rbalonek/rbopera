import React from "react";
import "./CSS/Bio.css";

export default function Bio() {
  return (
    <div className="bio_container">
      <div className="bio--left">
        <h1 className="bio--title">Biography</h1>
        <p className="bio--text_black">
          Hailing from Rochester NY, Robert always had a love for music. While
          learning music theory, jazz and musical theater in high school, he
          knew that his life would be surrounded by music.
        </p>
        <br />
        <p className="bio--text_red">
          Robert went to SUNY Purchase College in Westchester where he started
          training with his first teacher, Jacque Trussel.﻿ During this time he
          performed The title roles in Le Nozze di Figaro, and Gianni Schicchi.
          He also performed Ottone in Poppea, both Ferdinand and Prospero in the
          NY Premiere of Lee Hoiby's The Tempest, as well as the world Premiere
          of Raphaël Lucas' Confession. Before leaving Purchase, he recorded
          both The Tempest and Confession with Albany Records. The recordings
          can be found HERE ﻿
        </p>
        <br />
        <p className="bio--text_black">
          After Purchase, Robert moved to Manhattan where he received a
          professional studies diploma from Mannes School of Music under the
          tutelage of Bonnie Hammilton. During his two years there, Robert
          performed Guglielmo in Cosi Fan Tutte as well as ​Ford in Falstaff. He
          also performed with the Mannes Baroque Ensemble as the bass soloist
          for the Bach's St. Matthew Passion as well as the Fauré Requiem
          soloist for the Westchester Choral Society. ﻿
        </p>
        <br />
        <p className="bio--text_red">
          After College, Robert has been in collaboration with many new
          composers such as Zachary Johnson (Boston Tea Party Opera) Gerald
          Cohen (Steal A Pencil For Me), Mohammed Fairouz (Furia), and Stefnia
          DeKenessey (Bonfires of the Vanity).
        </p>
      </div>
      <div className="bio--right">
        <img
          className="bio-img"
          alt="bio-img"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145850/robertbalonek.com/Headshots/IMG_9758_copy_bugay5.jpg"
        ></img>
      </div>
    </div>
  );
}

// <div className="bio-container">
//       <h1 className="bio--title">Biography</h1>

// <img
//   className="bio-img"
//   alt="bio-img"
//   src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145850/robertbalonek.com/Headshots/IMG_9758_copy_bugay5.jpg"
// ></img>
//     </div>
