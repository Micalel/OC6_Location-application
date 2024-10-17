import React from "react";
import "../styles/Home.scss";
import img from "../resources/LOGO_footer.svg";

const footer = () => {
  return (
    <footer className="footer">
      <img src={img} alt="logo" />
      <p> © 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default footer;