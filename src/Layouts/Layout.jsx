import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Home from "../Screens/Home";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>

      <Footer />
    </div>
  );
}
