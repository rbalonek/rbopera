import React from "react";
import { Route, Switch } from "react-router";
import Home from "../Screens/Home";
import Audio from "../Screens/Audio";
import Bio from "../Screens/Bio";
import Video from "../Screens/Video";
import Photo from "../Screens/Photo";
import Contact from "../Screens/Contact";
import Engagements from "../Screens/Engagements";
import NewEngagements from "../Screens/NewEngagements";

export default function MainContainer() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />

      <Route path="/bio">
        <Bio />
      </Route>

      <Route path="/engagements">
        <NewEngagements />
      </Route>

      <Route path="/video">
        <Video />
      </Route>

      <Route path="/audio">
        <Audio />
      </Route>

      <Route path="/photo">
        <Photo />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}
