import React from 'react'
import "./AirPort.css"
import { FaSearch } from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa";

const AirPort = () => {
  return (
    <div className="airport-main-div">
      <div className="trip-option-div">
        <div>
          <label>Trip</label>
                  <div></div>
                  </div>
          <div>
            <select className='select-trim'>
              <option>Pickup from Airport</option>
              <option>Drop to Airport</option>
            </select>
          </div>
        </div>
   
      <div className="pickup-address-option-div">
        <div>
          <label>Pickup Address </label>
          <div></div>
        </div>

        <input
          type="text"
          placeholder="Enter Pickup Location"
          className="ato-from-input"
        />

        <FaSearch className="search-icon" />
      </div>

      <div className="drop-airport-option-div">
        <div>
          <label>Drop Airport</label>
          <div></div>
        </div>
        <input
          type="text"
          placeholder="Start typing airport name or city"
          className="ato-from-input"
        />
      </div>

      <div className="pickup-date-option-div">
        <div>
          <label>Pickup Date</label>
          <div></div>
        </div>

        <input className="apickup-input" />
        <FaChevronDown className="dropdown-icon" />
      </div>
      <div className="pickup-time-option-div">
        <div>
          <label>Pickup Time</label>
          <div></div>
        </div>

        <input className="apickup-input" />
        <FaChevronDown className="dropdown-icon" />
      </div>
          </div>
          
  );
}

export default AirPort