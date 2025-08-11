import React from "react";
import Bookingpage from "../Bookingpage/Bookingpage";
import "./Booking.css";
import appstore from "../../assets/appstore.jpg";
import google from "../../assets/google.jpg";
import playstore from "../../assets/playstore.jpg";
import { Link } from "react-router-dom";
const Booking = () => {
  return (
    // <div className="hero-section">
    //   <div className='booking-section'>
    //       <h1>SERVICES ACROSS 2000+ CITIES</h1>
    //       <Bookingpage/>
    //   </div>
    // </div>
    <div className="booking-section">
      <div className="background-layer"></div> {/* ✅ Background blur layer */}
      <div className="booking-content">
        <h1>SERVICES ACROSS 2000+ CITIES</h1>
        <Bookingpage />
        <div className="reviews-main-div">
          <div>
            <div>
              <Link to="/exploremorecar">               
                <button className="explore-cab-btn">EXPLORE CABS</button>
              </Link>
            </div>

            <div className="middle-para-div">
              India's Top Rated Car Rental Service
            </div>
            <div className="reviews-info-div">
              <div className="app-store-div">
                <div className="app-store-logo-div logo-div">
                  <img
                    className="app-store-logo-image"
                    src={appstore}
                    alt="app-store"
                  />
                </div>
                <div className="app-store-data-div">
                  <div>App Store</div>
                  <div>
                    <span class="yellow-star">★★★★★</span>
                  </div>
                  <div>(4.2k+ reviews)</div>
                </div>
              </div>
              <div className="google-div">
                <div className="google-logo-div logo-div">
                  <img
                    className="google-logo-image"
                    src={google}
                    alt="google"
                  />
                </div>
                <div className="google-data-div">
                  <div>Google</div>
                  <div>
                    <span class="yellow-star">★★★★★</span>
                  </div>
                  <div>(6.1k+ reviews)</div>
                </div>
              </div>
              <div className="play-store-div">
                <div className="play-store-logo-div logo-div">
                  <img
                    className="play-store-logo-image"
                    src={playstore}
                    alt="play-store"
                  />
                </div>
                <div className="play-store-data-div">
                  <div>Plat Store</div>
                  <div>
                    <span class="yellow-star">★★★★★</span>
                  </div>
                  <div>(15.5k+ reviews)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
