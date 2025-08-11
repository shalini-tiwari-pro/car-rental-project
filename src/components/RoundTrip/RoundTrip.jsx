import React from 'react'
import "./RoundTrip.css"

 
     
          
import { FaSearch } from "react-icons/fa";
import direction2 from '../../assets/direction2.jpg'
import { FaChevronDown } from "react-icons/fa";

const RoundTrip = () => {
  return (
    <div className="roundtrip-main-div">
      <div className="from-option-div">
        <div>
          <label>From</label>
          <div></div>
        </div>

        <input
          type="text"
          placeholder="Enter Pickup Location"
          className="rto-from-input"
        />

        <FaSearch className="search-icon" />
      </div>
      <div className="direction-icon">
        <img src={direction2} alt="icon" />
      </div>
      <div className="to-option-div">
        <div>
          <label>To</label>
          <div></div>
        </div>
        <input
          type="text"
          placeholder="Enter Drop Location"
          className="rto-from-input"
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="pickup-date-option-div">
        <div>
          <label>Pickup Date</label>
          <div></div>
        </div>

        <input className="rpickup-input" />
        <FaChevronDown className="dropdown-icon" />
      </div>
      <div className="pickup-time-option-div">
        <div>
          <label>Pickup Time</label>
          <div></div>
        </div>

        <input className="rpickup-input" />
        <FaChevronDown className="dropdown-icon" />
      </div>
      <div className="return-time-option-div">
        <div>
          <label>Return Time</label>
          <div></div>
        </div>

        <input className="rpickup-input" />
        <FaChevronDown className="dropdown-icon" />
      </div>
    </div>
  );
}

export default RoundTrip