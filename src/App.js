import React from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layout";
import MainContainer from "./Contaners/MainContainer"

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
