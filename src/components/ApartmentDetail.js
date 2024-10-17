import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apartmentsData from "../data/logements.json";
import "../styles/ApartmentDetail.scss";
import Accordion from "../components/Accordion";
import ImageCarousel from "../components/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ApartmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apartment = apartmentsData.find((apartment) => apartment.id === id);

  useEffect(() => {
    if (!apartment) {
      navigate("/404/");
    }
  }, [apartment, navigate]);

  if (!apartment) {
    return null;
  }

  return (
    <section className="apartment-detail">
      <div className="apartment-detail__image">
        <ImageCarousel images={apartment.pictures} />
      </div>


      <div className="apartment-detail__content">
        
        <div className="apartment-detail__content__info">
          <h1>{apartment.title}</h1>
          <p>{apartment.location}</p>
          <div className="apartment-detail__content__info__tags">
            {apartment.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

       
        <div className="apartment-detail__content__host-rating">
          <div className="apartment-detail__content__host-rating__host">
            <p>{apartment.host.name}</p>
            <img src={apartment.host.picture} alt={apartment.host.name} />
          </div>
          <div className="apartment-detail__content__host-rating__rating">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={index < apartment.rating ? 'filled' : ''}
                style={{ color: index < apartment.rating ? '#FF6060' : '#e0e0e0' }}
              />
            ))}
          </div>
        </div>
      </div>

     
      <div className="apartment-detail__accordion-wrapper">
        <Accordion
          items={[
            { title: "Description", content: apartment.description },
            { title: "Équipements", content: (
              <ul>
                {apartment.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
         )},
          ]}
        />
      </div>
    </section>
  );
};  

export default ApartmentDetail;
