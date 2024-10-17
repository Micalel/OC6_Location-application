import React from "react";
import "../styles/Home.scss";
import img from "../resources/imgHome.svg";
import Apartmentsection from "./Apartmentsection"; 

const Home = () => {
  return (
    <section className="main-container">
      <div className="img-container">
        <img src={img} alt="img" />
        <div className="text-overlay">Chez vous, partout et ailleurs</div>
      </div>
        <Apartmentsection />
    </section>
  );
}

export default Home;
