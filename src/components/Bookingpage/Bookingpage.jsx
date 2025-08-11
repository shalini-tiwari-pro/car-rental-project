import React, { useState } from "react";
import "./Bookingpage.css";
import Oneway from "../Oneway/Oneway";
import RoundTrip from "../RoundTrip/RoundTrip";
import Local from "../Local/Local";
import AirPort from "../AirPort/AirPort";


const Bookingpage = () => {
  const [activeTab, setActiveTab] = useState("oneway");

  const renderComponent = () => {
    switch (activeTab) {
      case "oneway":
        return <Oneway />;
      case "roundtrip":
        return <RoundTrip />;
      case "local":
        return <Local />;
      case "airport":
        return <AirPort />;
      default:
        return <Oneway />;
    }
  };

  return (
    <div className="bookingpage-section">
      <br />
      <div className="table-section">
        <table border="1" cellSpacing="0" className="booking-table">
          <tbody>
            <tr>
              <td className="booking-td">
                <span
                  className="booking-link"
                  onClick={() => setActiveTab("oneway")}
                >
                  ONE WAY
                </span>
              </td>
              <td className="booking-td">
                <span
                  className="booking-link"
                  onClick={() => setActiveTab("roundtrip")}
                >
                  ROUND TRIP
                </span>
              </td>
              <td className="booking-td">
                <span
                  className="booking-link"
                  onClick={() => setActiveTab("local")}
                >
                  LOCAL
                </span>
              </td>
              <td className="booking-td">
                <span
                  className="booking-link"
                  onClick={() => setActiveTab("airport")}
                >
                  AIRPORT
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <div className="booking-content">{renderComponent()}</div>
    </div>
  );
};

export default Bookingpage;
