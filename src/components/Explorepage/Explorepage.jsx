import React from 'react'
import "./Explorepage.css"
import sedan from "../../assets/sedan.jpg";
import suv from "../../assets/suv.jpg";
import hatchback from "../../assets/hatchback.jpg";
import minivan from "../../assets/minivan.jpg";
import tavera from "../../assets/tavera.jpg";
import {Link} from "react-router-dom"
const Explorepage = () => {
    const fewtaxiData = [
      {
        name: "Sedan",
        image:sedan,

        capacity: "4 Passengers",
      },
      {
        name: "SUV",
        image:
         suv,
        capacity: "6 Passengers",
      },
      {
        name: "Hatchback",
        image:hatchback
          ,
        capacity: "4 Passengers",
      },
      {
        name: "Mini Van",
        image:
          minivan,
        capacity: "7 Passengers",
      },
      {
        name: "Tavera",
        image:
          tavera,
        capacity: "7 Passengers",
      },
    ];
  return (
    <div>
      <div className="explore-heading-div">
        <h1 className="explore-heading">Explore Range Of Taxi</h1>
       
        <Link to="/exploremorecar" className='link-tag'><button className="explore-more-btn">Explore More</button></Link>
    
      </div>
      <br />
      <div className="explorepage-main-div">
        {fewtaxiData.map((user) => (
          <div className="taxicard">
            <img src={user.image} alt="taxi" className="taxi-img" />
            <p>{user.name}</p>
            <p>Capacity: {user.capacity}</p>
       <Link to="/cabform" className='link-tag'><button className="taxi-btn">Book Taxi</button></Link> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explorepage