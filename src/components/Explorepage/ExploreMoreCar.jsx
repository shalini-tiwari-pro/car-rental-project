import React from 'react'
import "./ExploreMoreCar.css"
import sedan from "../../assets/sedan.jpg";
import suv from "../../assets/suv.jpg";
import hatchback from "../../assets/hatchback.jpg";
import minivan from "../../assets/minivan.jpg";
import tavera from "../../assets/tavera.jpg";
import bmw from "../../assets/bmw.jpg";
import audi from "../../assets/audi.jpg";
import lamborghini from "../../assets/lamborghini.jpg";
import ferrari from "../../assets/ferrari.jpg";
import porsche from "../../assets/porsche.jpg";
import mercedes from "../../assets/mercedes.jpg";
import tesla from "../../assets/tesla.jpg";
import toyota from "../../assets/toyota.jpg";
import dodge from "../../assets/dodge.jpg";
import ford from "../../assets/ford.jpg";
import jaguar from "../../assets/jaguar.jpg";
import chevrolet from "../../assets/chevrolet.jpg";
import aston from "../../assets/aston.jpg";
import mclaren from "../../assets/mclaren.jpg";
import bugatti from "../../assets/bugatti.jpg";
import { Link } from "react-router-dom";
const ExploreMore = () => {
    const taxiData = [
      {
        name: "Sedan",
        image: sedan,

        capacity: "4 Passengers",
      },
      {
        name: "SUV",
        image: suv,
        capacity: "6 Passengers",
      },
      {
        name: "Hatchback",
        image: hatchback,
        capacity: "4 Passengers",
      },
      {
        name: "Mini Van",
        image: minivan,
        capacity: "7 Passengers",
      },
      {
        name: "Tavera",
        image: tavera,
        capacity: "7 Passengers",
      },
      {
        name: "Lamborghini Aventador",
        image: lamborghini,
      },
      {
        name: "Ferrari 488",
        image: ferrari,
      },
      {
        name: "Porsche 911",
        image: porsche,
      },
      {
        name: "BMW M4",
        image: bmw,
      },
      {
        name: "Audi R8",
        image: audi,
      },
      {
        name: "Mercedes AMG GT",
        image: mercedes,
      },
      {
        name: "Tesla Model S",
        image: tesla,
      },
      {
        name: "Chevrolet Camaro",
        image: chevrolet,
      },
      {
        name: "Ford Mustang",
        image: ford,
      },
      {
        name: "Dodge Challenger",
        image: dodge,
      },

      {
        name: "Toyota Supra",
        image: toyota,
      },
      {
        name: "Jaguar F-Type",
        image: jaguar,
      },
      {
        name: "McLaren 720S",
        image: mclaren,
      },
      {
        name: "Aston Martin DB11",
        image: aston,
      },
      {
        name: "Bugatti Chiron",
        image: bugatti,
      },
    ];
  return (
    <div>
      <div className="exploremore-main-div">
      
        {taxiData.map((user) => (
          <div className="more-taxi-card">
            <img src={user.image} alt="taxi" className="more-taxi-img" />
            <p>{user.name}</p>
            <p>Capacity: {user.capacity}</p>
     <Link to="/cabform" className='link-tag'><button className="more-taxi-btn">Book Taxi</button></Link>
          </div>
        ))}
      
      </div>
    </div>
  );
}


   
export default ExploreMore