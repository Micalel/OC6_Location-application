import React from 'react';

const ApartmentCard = ({ apartment }) => {
  return (
    <div className="apartment-card">
      <img src={apartment.image} alt={apartment.name} />
      <h2>{apartment.name}</h2>
      <p>{apartment.description}</p>
      <p>{apartment.price} €</p>
    </div>
  );
}

export default ApartmentCard;
