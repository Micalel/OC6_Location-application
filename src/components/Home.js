import React from "react";
import "../styles/Home.scss";
import img from "./img_source.svg";

const Home = () => {
  return (
    <section className="main-container">
      <div className="img-container">
        <img src={img} alt="img" />
        <div className="text-overlay"> Chez vous, partout ailleurs.</div>
      </div>
    </section>
  );
}

export default Home;