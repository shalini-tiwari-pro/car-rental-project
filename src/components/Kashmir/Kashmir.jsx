import React from "react";
import "./Kashmir.css";
import {Link} from "react-router-dom"
const Kashmir = () => {
  return (
    <div>
      <h1 className="kashmir-h1">Rent a Car in 3 Quick Steps</h1>
      <div className="Kashmir-main-div">
        <div>
          <h2>1-Select a Taxi</h2>
          <hr className="heading-line" />
          <div className="data-div">
            we offer a diverse selection of vehicles including a sedans and
            luxury cars. pick the taxi that suits your needs from the available
            options we
          </div>
          <Link to="/exploremore">
        
    <button className="kashmir-btn">Select Taxi</button></Link> 
       
        </div>
        <div>
          <h2>2-Plan Your Trip</h2>
          <hr className="heading-line" />
          <div className="data-div">
            please fill the enquiry form with the necessary information for your
            preferred dates and upon submission we will receive your details and
            get in touch with you
          </div>

          <Link to="https://zikrme.com/">
            <button className="kashmir-btn">Enquire Now</button>
          </Link>
        </div>
        <div>
          <h2>3-Confirmation</h2>
          <hr className="heading-line" />
          <div className="data-div">
            in just a short while our team will process your information and you
            can expect to receive a confirmation of your Kashmir taxi
            reservation
          </div>
          <Link
            to="https://wa.me/917310624101?text=Hello%20ZikRme%20Team%20%2C%20I%20am%20interested%
20in%20your%20services.%20Please%20share%20more%20information.%20Thank%20you!"
          >
            <button className="kashmir-btn">Enquire Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kashmir;
