import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
import hero from "../../assets/hero.jpg";

import suzuki from "../../assets/suzuki.jpg";
import kawasaki from "../../assets/kawasaki.jpg";

import harley from "../../assets/harley.jpg";
import benelli from "../../assets/benelli.jpg";
import aprilia from "../../assets/aprilia.jpg";
import bmw from "../../assets/bmw.jpg";
import audi from "../../assets/audi.jpg";

import ferrari from "../../assets/ferrari.jpg";

import mercedes from "../../assets/mercedes.jpg";
import {Link} from "react-router-dom"


import dodge from "../../assets/dodge.jpg";

const picture = [
  {
    name: "Hero Xpulse 200",
    image: hero,
  },


  {
    name: "Suzuki Gixxer SF",
    image: suzuki,
  },
  {
    name: "Kawasaki Ninja 300",
    image: kawasaki,
  },

  {
    name: "Dodge Challenger",
    image: dodge,
  },
  {
    name: "Benelli TRK 502",
    image: benelli,
  },
  {
    name: "Aprilia RS 660",
    image: aprilia,
  },

  {
    name: "Ferrari 488",
    image: ferrari,
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
    name: "Harley Davidson Iron 883",
    image: harley,
  },
  {
    name: "Mercedes AMG GT",
    image: mercedes,
  },
];
const Gallery = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="main-box">
      <div className="gallery-heading-div">
        <h1>Gallery</h1>

        <Link to="/exploremorecar">
          <button className="explore-more-btn">Explore More</button>
        </Link>
      </div>

      <Slider {...settings}>
        {picture.map((item, index) => (
          <div key={index} className="gallery-card">
            <img src={item.image} alt={item.name} className="slider-imgg" />
            <h4 className="image-name"> {item.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
