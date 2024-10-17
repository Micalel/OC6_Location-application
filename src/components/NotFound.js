import React from "react";
import { NavLink } from "react-router-dom"; 
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="not-found__link">
        Retourner sur la page d'accueil
      </NavLink>
    </section>
  );
};

export default NotFound;
