import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>

      <Footer />
    </div>
  );
}
