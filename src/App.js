import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layout";
import MainContainer from "./Containers/MainContaier.jsx";
import Bio from "./Screens/Bio";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
