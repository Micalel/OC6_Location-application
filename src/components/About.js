import React from 'react';
import img from '../resources/imgAbout.svg'
import '../styles/About.scss';
import Accordion from './Accordion';

const About = () => {
    return (
        <main>
            <section className="about-img-container">
                <img src={img} alt="A beautiful background depicting the company values" />
            </section>
            
            <section className="about-accordion-wrapper">
                <Accordion items={[
                   { title : "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
                   { title: "Respect", content: "La bienvieillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
                   { title : "Service client", content: "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." },
                   { title : "Sécurité", content: "La sécurité est la priorité chez Kasa. Aussi bien pour nos hôtes que nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des aterliers sur la sécurité domestique pour nos hôtes. " },
                ]} />
            </section>
        </main>
    );
}

export default About;
