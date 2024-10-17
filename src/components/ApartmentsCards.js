import React from "react";
import { Link } from "react-router-dom";
import "../styles/Apartmentcards.scss";

function ApartmentCard({ apartment }) {
    return (
        <Link to={`/apartment/${apartment.id}`} className="apartment-card-link">
            <article className="apartment-card"
                style={{backgroundImage: `linear-gradient(360deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%), url(${apartment.cover})`}}>
                <div className="apartment-card__content">
                    <h2 className="apartment-card__title">{apartment.title}</h2>
                </div>
            </article>
        </Link>
    );
}

export default ApartmentCard;
