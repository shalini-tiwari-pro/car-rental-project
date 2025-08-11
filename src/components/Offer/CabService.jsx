import React from 'react'
import { Link } from "react-router-dom"
import "./CabService.css"
const CabService = () => {
  return (
    <div className="cab-service-main-div">
      <h1 style={{ textAlign: "center" }}>
        Book Trusted Cabs Instantly - Safe, Affordable & Hassle-Free
      </h1>

      <div>
        <h2>About Our Cab Service:</h2>
        <p>
          ZikRme brings you easy, fast, and affordable cab booking with verified
          drivers and clean vehicles. Whether it's a local city ride, airport
          transfer, or outstation one-way or round trip, we’ve got you covered –
          just a few taps away!
        </p>
        <hr />
        <h2>What You Get:</h2>
        <div className="what-you-get-div">
          <div> Local, Outstation & Airport Transfers </div>
          <div> On-Time Pickup with 24x7 Availability</div>
          <div> Transparent Pricing – No Hidden Charges</div>
          <div>Wide Fleet – Hatchbacks, Sedans, SUVs, and Tempo Travellers</div>
          <div>Trained & Verified Drivers </div>
          <div> Flexible Routes</div>
        </div>
        <hr />
        <h2>Booking Types:</h2>
        <div className="booking-type-div">
          <div> One-Way Trip</div>
          <div> Round Trip</div>
          <div>Local Hourly Package</div>
          <div>Airport Pickup & Drop</div>
        </div>
        <hr />
        <h2>Why ZikRme Cab Service?</h2>
        <div className="why-zikrme-cab-service-div">
          <div>Instant Booking with WhatsApp/Online</div>
          <div>100% Customer Support & Easy Cancellations</div>
          <div>Affordable Packages for Family, Business, and Tourist Use</div>
          <div>
            Service available across multiple cities & tourist destinations
          </div>
        </div>

        <hr />
        <h2>How to Book?</h2>

        <p>Book online via ZikRme or directly send us a WhatsApp message: </p>
        <div className="how-to-book-div">
          <div className="whatsapp-link-div">
            <Link
              className="whatsapp-link"
              to="https://wa.me/917310624101?text=Hello%20ZikRme%20Team%20%2C%0AI%20would%20like%20t
o%20book%20a%20cab.%0A%0A🚖%20Name%3A%20[Your%20Name]%0A📞%20Phone%3A%20[Yo
ur%20Phone]%0A🛣️%20Trip%20Type%3A%20[One%20Way%20%2F%20Round%20Trip%20%2F%20
Local%20%2F%20Airport]%0A📍%20Pickup%20Location%3A%20[Pickup%20Point]%0A🎯%20Drop%
20Location%3A%20[Drop%20Point]%0A📅%20Pickup%20Date%2FTime%3A%20[Date%20Time]%0A
👥%20Passengers%3A%20[Count]%0A🚘%20Cab%20Type%3A%20[Sedan%2C%20SUV%2C%20Hatch
back]%0A%0APlease%20confirm%20availability%20and%20fare.%20Thank%20you!"
            >
              <p>👉 Click to Book on WhatsApp</p>
            </Link>
          </div>
          <div className="zikrme-link-div">
            {" "}
            <Link to="https://zikrme.com/" className="zikrme-link">
              <p>👉 Click to Book on ZikRme</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CabService