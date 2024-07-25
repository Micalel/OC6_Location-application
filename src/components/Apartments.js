import React from "react";
import apartmentsData from "../data/logements.json";
import ApartmentCard from "./ApartmentCard.js";


function Apartments() {
    return (
        <div className="apartments">
        {apartmentsData.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
        </div>
    );
    }

    export default Apartments;
    