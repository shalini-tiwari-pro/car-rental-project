import React from 'react'
import "./Local.css"
import { FaSearch } from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa";

const Local = () => {
  return (
    <div className="local-main-div">
      <div className="city-option-div">
        <div>
          <label>City</label>
          <div></div>
        </div>

        <input
          type="text"
          placeholder="Enter Pickup Location"
          className="city-input"
        />

        <FaSearch className="search-icon" />
      </div>
    
     
       

      <div className="pickup-date-option-div">
        <div>
          <label>Pickup Date</label>
          <div></div>
        </div>

        <input className="lpickup-input" />
        <FaChevronDown className="dropdown-icon" />
      </div>
      <div className="pickup-time-option-div">
        <div>
          <label>Pickup Time</label>
          <div></div>
        </div>

        <input className='lpickup-input' />
        <FaChevronDown className="dropdown-icon" />
      </div>
    </div>
  );
}

export default Local