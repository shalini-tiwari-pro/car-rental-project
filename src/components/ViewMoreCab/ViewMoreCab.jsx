import React from "react";
import "./ViewMoreCab.css";
import marutisuzuki from "../../assets/marutisuzuki.jpg";
import hyundai from "../../assets/hyundai.jpg";
import hondaamaze from "../../assets/hondaamaze.jpg";
import toyotainnova from "../../assets/toyotainnova.jpg";
import tatanexon from "../../assets/tatanexon.jpg";
import mahindraxuv from "../../assets/mahindraxuv.jpg";
import kiaseltos from "../../assets/kiaseltos.jpg";
import renault from "../../assets/renault.jpg";
import fordeco from "../../assets/fordeco.jpg";
import mghector from "../../assets/mghector.jpg";
import hondacity from "../../assets/hondacity.jpg";
import hyundaiverna from "../../assets/hyundaiverna.jpg";
import tatasafari from "../../assets/tatasafari.jpg";
import mahindrascorpio from "../../assets/mahindrascorpio.jpg";
import toyotafortuner from "../../assets/toyotafortuner.jpg";
import skodasuperb from "../../assets/skodasuperb.jpg";
import volkswagen from "../../assets/volkswagen.jpg";
import mercedesbenz from "../../assets/mercedesbenz.jpg";
import bmw5 from "../../assets/bmw5.jpg";
import marutiertiga from "../../assets/mahindraxuv.jpg";
import { Link } from "react-router-dom";
const ViewMoreCab = () => {
  const carRentalData = [
    {
      name: "Maruti Suzuki Swift",
      doors: 4,
      capacity: "1.2L",
      passengers: 5,
      image: marutisuzuki,
    },
    {
      name: "Hyundai i20",
      doors: 4,
      capacity: "1.2L",
      passengers: 5,
      image: hyundai,
    },
    {
      name: "Honda Amaze",
      doors: 4,
      capacity: "1.2L",
      passengers: 5,
      image: hondaamaze,
    },
    {
      name: "Toyota Innova Crysta",
      doors: 5,
      capacity: "2.4L",
      passengers: 7,
      image: toyotainnova,
    },
    {
      name: "Tata Nexon",
      doors: 4,
      capacity: "1.5L",
      passengers: 5,
      image: tatanexon,
    },
    {
      name: "Mahindra XUV500",
      doors: 5,
      capacity: "2.2L",
      passengers: 7,
      image: mahindraxuv,
    },
    {
      name: "Kia Seltos",
      doors: 4,
      capacity: "1.5L",
      passengers: 5,
      image: kiaseltos,
    },
    {
      name: "Renault Triber",
      doors: 5,
      capacity: "1.0L",
      passengers: 7,
      image: renault,
    },
    {
      name: "Ford EcoSport",
      doors: 4,
      capacity: "1.5L",
      passengers: 5,
      image: fordeco,
    },
    {
      name: "MG Hector",
      doors: 5,
      capacity: "1.5L Turbo",
      passengers: 5,
      image: mghector,
    },
    {
      name: "Maruti Ertiga",
      doors: 5,
      capacity: "1.5L",
      passengers: 7,
      image: marutiertiga,
    },
    {
      name: "Honda City",
      doors: 4,
      capacity: "1.5L",
      passengers: 5,
      image: hondacity,
    },
    {
      name: "Hyundai Verna",
      doors: 4,
      capacity: "1.5L",
      passengers: 5,
      image: hyundaiverna,
    },
    {
      name: "Tata Safari",
      doors: 5,
      capacity: "2.0L",
      passengers: 7,
      image: tatasafari,
    },
    {
      name: "Mahindra Scorpio",
      doors: 5,
      capacity: "2.2L",
      passengers: 7,
      image: mahindrascorpio,
    },
    {
      name: "Toyota Fortuner",
      doors: 5,
      capacity: "2.8L",
      passengers: 7,
      image: toyotafortuner,
    },
    {
      name: "Skoda Superb",
      doors: 4,
      capacity: "2.0L",
      passengers: 5,
      image: skodasuperb,
    },
    {
      name: "Volkswagen Virtus",
      doors: 4,
      capacity: "1.0L Turbo",
      passengers: 5,
      image: volkswagen,
    },
    {
      name: "Mercedes-Benz E-Class",
      doors: 4,
      capacity: "2.0L",
      passengers: 5,
      image: mercedesbenz,
    },
    {
      name: "BMW 5 Series",
      doors: 4,
      capacity: "2.0L",
      passengers: 5,
      image: bmw5,
    },
  ];

  return (
    <div className="view-more-main-div">
      {carRentalData.map(({ image, name, capacity, passengers, doors }, id) => (
        <div className="cab-more-rental-card-div" key={id}>
          <img src={image} alt={name} className="cab-more-img" />
          <p>
            <strong>{name}</strong>
          </p>
          <p>Fuel Type: {capacity}</p>
          <p>Passengers: {passengers}</p>
          <p>Doors: {doors}</p>
          <Link to="/rentalform" className="link-tag">
            <button className="cab-more-btn">Rent Now</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ViewMoreCab;
