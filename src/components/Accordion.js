import React, { useState } from "react";
import "../styles/Accordion.scss";
import arrowUp from "../resources/VectorarrowUp.svg";
import arrowDown from "../resources/VectorarrowDown.svg";

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion__item">
            <div 
                className={`accordion__header ${isOpen ? 'accordion__header--open' : ''}`} 
            >
                <span>{title}</span>
                <span className={`accordion__arrow ${isOpen ? 'accordion__arrow--open' : ''}`}
                onClick={toggleAccordion}>
                    <img src={isOpen ? arrowUp : arrowDown} />
                </span>
            </div>
            <div className={`accordion__content ${isOpen ? 'accordion__content--open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

const Accordion = ({ items }) => {
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default Accordion;
