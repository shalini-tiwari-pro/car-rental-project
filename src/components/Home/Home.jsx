import React from 'react';

import Booking from "../Booking/Booking";
import Explorepage from "../Explorepage/Explorepage";
import Service from "../Service/Service";
import Kashmir from "../Kashmir/Kashmir";
import Chooseus from "../Chooseus/Chooseus";
import Gallery from "../Gallery/Gallery";
import Offer from "../Offer/Offer";



const Home = () => {
  return (
    <div>
    
      <Booking />

      <Offer />

      <Explorepage />

      <Service />
      <Kashmir />
      <Chooseus />
      <Gallery />
     
   
    </div>
  );
}

export default Home