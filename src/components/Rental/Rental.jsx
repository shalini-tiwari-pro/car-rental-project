import React from "react";
import toyotainnova from "../../assets/toyotainnova.jpg";
import marutisuzuki from "../../assets/marutisuzuki.jpg";
import hyundai from "../../assets/hyundai.jpg";
import hondaamaze from "../../assets/hondaamaze.jpg";
import tatanexon from "../../assets/tatanexon.jpg";
import rentalimage from "../../assets/rentalimage.jpg"; // ✅ Add extension here

import { Link } from "react-router-dom";
import Explore from "../Explore/Explore";
import Gallery from "../Gallery/Gallery";
import "./Rental.css";

const carData = [
  {
    name: "Toyota Innova Crysta",
    image: toyotainnova,
    capacity: "Diesel",
    passengers: 7,
    doors: 5,
  },
  {
    name: "Maruti Suzuki Swift",
    image: marutisuzuki,
    capacity: "Petrol",
    passengers: 5,
    doors: 4,
  },
  {
    name: "Hyundai Creta",
    image: hyundai,
    capacity: "Diesel",
    passengers: 5,
    doors: 5,
  },
  {
    name: "Honda Amaze",
    image: hondaamaze,
    capacity: "Petrol",
    passengers: 5,
    doors: 4,
  },
  {
    name: "Tata Nexon",
    image: tatanexon,
    capacity: "Diesel",
    passengers: 5,
    doors: 5,
  },
];

const Rental = () => {
  return (
    <div>
      <div className="rental-main-div">
        <div className="rental-main-image-div">
          <h1 className="rental-page-h1">
            Your Ride, Your Way – Anytime, Anywhere with ZikRme. Easy.
            Affordable. Reliable. Just ZikRme it
          </h1>
          <Link to="/viewmore">
            <button className="view-more-btn">View More</button>
          </Link>
          <img src={rentalimage} alt="image" className="rental-image" />
        </div>
        <div className="cab-rental-grid car-scroll-container">
          {carData.map(({ image, name, capacity, passengers, doors }, id) => (
            <div className="cab-rental-card-div" key={id}>
              <img src={image} alt={name} className="cab-img" />
              <p>
                <strong>{name}</strong>
              </p>
              <p>Fuel Type: {capacity}</p>
              <p>Passengers: {passengers}</p>
              <p>Doors: {doors}</p>
              <Link to="/rentalform" className="link-tag">
                <button className="cab-btn">Rent Now</button>
              </Link>
            </div>
          ))}
        </div>
       
      
      </div>

      <Explore />
      <Gallery />
    </div>
  );
};

export default Rental;
