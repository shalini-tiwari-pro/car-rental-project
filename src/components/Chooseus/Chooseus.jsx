import React from 'react'
import "./Chooseus.css"
import safety from "../../assets/safety.png"
import official from "../../assets/official.png";
import quotes from "../../assets/quotes.png";
const Chooseus = () => {
  return (
    <div>
      <h1 className="choose-h1">Why Choose Us</h1>
      <div className="choose-main-div">
        <div className="choose-card">
          <div className="icons">
            <img src={safety}  className="icon" />
          </div>

          <h2>offical Above All</h2>

          <div className="choose-data">
            your safety is Paramount to us our fleet is equipped with the latest
            safety features and our experienced drives adhere to strict safety
            protocols ensuring you enjoy a secure journey
          </div>
        </div>
      
        <div className="choose-card">
          <div className="icons">
            <img src={official} className="icon" />
          </div>
          <h2>Licensed And Certified</h2>
          <div className="choose-data">
            rest easy knowing that all our drives are fully licensed and
            certified with their expertise and professionalism you can trust us
            to provide a reliable and lawful service
          </div>
        </div>
       
        <div className="choose-card">
          <div className="icons">
            <img src={quotes} className="icon" />
          </div>
          <h2>Get Your Free Quote</h2>
          <div className="choose-data">
            planning our travel expenses is easier than ever get a free no
            obligation quote tailored to your journey's specifics, allowing you
            to budget with confidence
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chooseus