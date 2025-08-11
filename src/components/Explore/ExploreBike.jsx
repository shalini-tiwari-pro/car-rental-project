
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./ExploreBike.css";

import bmw1 from "../../assets/bmw1.jpg";
import royal from "../../assets/royal.jpg";
import yamaha from "../../assets/yamaha.jpg";
import ktm from "../../assets/ktm.jpg";
import tvs from "../../assets/tvs.jpg";
import bajaj from "../../assets/bajaj.jpg";
import hero from "../../assets/hero.jpg";
import honda from "../../assets/honda.jpg";
import suzuki from "../../assets/suzuki.jpg";
import kawasaki from "../../assets/kawasaki.jpg";
import ducati from "../../assets/ducati.jpg";
import harley from "../../assets/harley.jpg";
import benelli from "../../assets/benelli.jpg";
import aprilia from "../../assets/aprilia.jpg";

const bikes = [
  { name: "Royal Enfield Classic 350", image: royal },
  { name: "Yamaha R15 V4",            image: yamaha },
  { name: "KTM Duke 390",             image: ktm },
  { name: "TVS Apache RTR 160",       image: tvs },
  { name: "Bajaj Pulsar NS200",       image: bajaj },
  { name: "Hero Xpulse 200",          image: hero },
  { name: "Honda CB350 H'Ness",       image: honda },
  { name: "Suzuki Gixxer SF",         image: suzuki },
  { name: "Kawasaki Ninja 300",       image: kawasaki },
  { name: "BMW G310R",                image: bmw1 },
  { name: "Ducati Panigale V2",       image: ducati },
  { name: "Harley‑Davidson Iron 883", image: harley },
  { name: "Benelli TRK 502",          image: benelli },
  { name: "Aprilia RS 660",           image: aprilia },
];

const ExploreBike = () => {
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
    <div className="explore-bike-container">
        
      <Slider {...settings}>
        {bikes.map(({ name, image }) => (
          <div key={name} className="slide-wrapper">
            <Link to="/bikeoption" className="bike-card">
              <img src={image} alt={name} className="bike-image" />
              <h4 className="bike-name">{name}</h4>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExploreBike;
