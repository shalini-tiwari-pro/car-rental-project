import React from 'react'
import ExploreCar from "./ExploreCar";
import ExploreBike from "./ExploreBike";
import { Link } from "react-router-dom";
import "./Explore.css"
const Explore = () => {
  return (
    <div className="Explore-main-div">
      <div className="Explorecar-div">
        <h1 style={{ textAlign: "center" }}>Explore Car Here</h1>

        <ExploreCar />
      </div>
      <div className="Explorebike-div">
        <div className="explore-heading-div">
          <h1 style={{ textAlign: "center" }}>Explore Bike Here</h1>

          <Link to="/exploremorebike" className="link-tag">
            <button className="explore-more-btn">Explore More</button>
          </Link>
        </div>
        <ExploreBike />
      </div>
    </div>
  );
}

export default Explore