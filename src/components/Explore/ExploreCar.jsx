
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ExploreCar.css";


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
import mclaren from "../../assets/mclaren.jpg"
import bugatti from "../../assets/bugatti.jpg";

const cars = [
  {
    name: "Lamborghini Aventador",
    image:lamborghini,
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
    image:tesla,
  },
  {
    name: "Chevrolet Camaro",
    image: chevrolet,
  },
  {
    name: "Ford Mustang",
    image:ford,
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
    image:bugatti,
  },
];


const ExploreCar = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200,
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 3, slidesToScroll: 2 },
      },
      {
        breakpoint: 540,
        settings: { slidesToShow: 2, slidesToScroll: 1 }, //
      },
    ],
  };

  return (

    <div className="main-box">
      <Slider {...settings}>
        {cars.map((item, index) => (
          <div key={index} className="explore-car-card">
            <img src={item.image} alt={item.name} className="slider-image" />
            <h4 className="explore-car-name"> {item.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};





export default ExploreCar