import React from "react";
import cab from "../../assets/cab.jpg";
import bike from "../../assets/bike.jpg";
import car from "../../assets/car.jpg";
import { useNavigate } from "react-router-dom";

import "./Offer.css";
const offerobj = [
  {
    
    image: cab,
    name: " Cab Service",
    link:"/cab"
  },
  {
    image: bike,
    name: " Bike Rentals",
    link:"/bike"
  },
  {
    image: car,
    name: "Car Rentals",
    link:"/car"
  },
];
const Offer = () => {
   const navigate = useNavigate();
  return (
    <div>
      <h1 className="offer-h1">What We Offer</h1>
      <div className="offer-main-div" >
        {offerobj.map((off,index) => (
          <div className="offer-card" key={index} onClick={() => navigate(off.link)} >
            <img src={off.image} alt="image" className="offer-image" />
            <h2>{off.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
