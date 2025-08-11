import React from 'react'
import { Link } from "react-router-dom"
import "./ExploreMoreBike.css"
import royalenfield from "../../assets/royalenfield.jpg"
import bajajpulsar from "../../assets/bajajpulsar.jpg";
import tvsapache from "../../assets/tvsapache.jpg";
import yamahafz from "../../assets/yamahafz.jpg";
import ktm from "../../assets/ktm.jpg";
import heroxtreme from "../../assets/heroxtreme.jpg";
import hondacb from "../../assets/hondacb.jpg";
import suzukigixxer from "../../assets/suzukigixxer.jpg";
import royalhunter from "../../assets/royalhunter.jpg";
import yamahamt from "../../assets/yamahamt.jpg";
import bajajavenger from "../../assets/bajajavenger.jpg";
import hondashine from "../../assets/hondashine.jpg";
import tvsraider from "../../assets/tvsraider.jpg";
import suzukiaccess from "../../assets/suzukiaccess.jpg";
import yamaharay from "../../assets/yamaharay.jpg";
import tvsjupiter from "../../assets/tvsjupiter.jpg";
import herosplendor from "../../assets/herosplendor.jpg";
import kawasakininja from "../../assets/kawasakininja.jpg";
import bmwg310 from "../../assets/bmwg310.jpg";
import apriliasr from "../../assets/apriliasr.jpg";
const bikes = [
  {
    name: "Royal Enfield Classic 350",
    image:royalenfield,
    capacity: "349cc",
  
  },
  {
    name: "Bajaj Pulsar NS200",
    image: bajajpulsar,
    capacity: "199cc",
   
  },
  {
    name: "TVS Apache RTR 160",
    image: tvsapache,
    capacity: "159.7cc",
  
  },
  {
    name: "Yamaha FZ-S V3",
    image: yamahafz,
    capacity: "149cc",
   
  },
  {
    name: "KTM Duke 200",
    image:ktm,
    capacity: "199.5cc",
   
  },
  {
    name: "Hero Xtreme 160R",
    image: heroxtreme,
    capacity: "163cc",
   
  },
  {
    name: "Honda CB Hornet 160R",
    image:hondacb,
    capacity: "162.7cc",
    
  },
  {
    name: "Suzuki Gixxer SF",
    image: suzukigixxer,
    capacity: "155cc",
    
  },
  {
    name: "Royal Enfield Hunter 350",
    image:royalhunter,
    capacity: "349cc",
   
  },
  {
    name: "Yamaha MT-15",
    image:yamahamt,
    capacity: "155cc",
    
  },
    {
        name: "Bajaj Avenger Street 160",
        image:bajajavenger,
        capacity: "160cc",
    },
  {
    name: "Honda Shine",
    image: hondashine,
    capacity: "124cc",
   
  },
    {
        name: "TVS Raider 125",
        image: tvsraider,
        capacity: "124.8cc",
    },
  {
    name: "Suzuki Access 125",
    image: suzukiaccess,
    capacity: "124cc",
  
  },
  {
    name: "Yamaha Ray ZR",
    image:yamaharay,
    capacity: "125cc",
  
  },
  {
    name: "TVS Jupiter",
    image: tvsjupiter,
    capacity: "110cc",
   
  },
  {
    name: "Hero Splendor Plus",
    image: herosplendor,
    capacity: "97.2cc",
  
  },
  {
    name: "Kawasaki Ninja 300",
    image: kawasakininja,
    capacity: "296cc",
   
  },
  {
    name: "BMW G 310 R",
    image:bmwg310,
    capacity: "313cc",
   
  },
  {
    name: "Aprilia SR 160",
    image: apriliasr,
    capacity: "160cc",
   
  },
];

const ExploreMoreBike = () => {
 return (
   <div>
     <div className="exploremore-main-div">
       {bikes.map((user) => (
         <div className="more-bike-card">
           <img src={user.image} alt="taxi" className="more-bike-img" />
           <p>{user.name}</p>
           <p>Capacity: {user.capacity}</p>
           <Link to="/bikeform" className="link-tag">
             <button className="more-bike-btn">Book Bike</button>
           </Link>
         </div>
       ))}
     </div>
   </div>
 );
}

export default ExploreMoreBike