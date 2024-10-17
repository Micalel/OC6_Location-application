import React from 'react';
import ApartmentCards from './ApartmentsCards';
import '../styles/Apartmentcards.scss';
import apartmentsData from '../data/logements.json';

const Apartmentsection = () => {
  return (
    <section className='apartment-container'>
      {apartmentsData.map((apartment) => (
        <ApartmentCards key={apartment.id} apartment={apartment} />
      ))}
    </section>
  );
}

export default Apartmentsection;
