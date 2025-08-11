import React from 'react'
import { Link } from "react-router-dom"
import "./BikeRental.css"
const BikeRental = () => {
  return (
    <div className="bike-rental-main-div">
      <h1 style={{ textAlign: "center" }}>
        Rent a Bike or Car – Freedom to Ride, Your Way!
      </h1>
      <div>
        <h2>About Our Rental Service:</h2>
        <p>
          ZikRme offers you the freedom to explore your destination at your own
          pace with our Bike and Car Rental services. Whether you want a solo
          ride on scenic roads or a comfortable car for a group trip, we provide
          well-maintained vehicles with both Self Drive and With Driver options.
        </p>
        <hr />
        <h2>What You Get:</h2>
        <div className="what-you-get-div">
          <div> 2-Wheelers: Scooty, Bikes, Royal Enfields</div>
          <div> 4-Wheelers: Hatchbacks, Sedans, SUVs</div>
          <div>Clean, Insured & Fully Maintained Vehicles</div>
          <div> Easy Documentation (Govt. ID & DL Required)</div>
          <div> Roadside Support Available on Call</div>
          <div> Flexible Pickup & Drop Timings</div>
        </div>
        <hr />
        <h2>Rental Modes:</h2>
        <div className="rental-mode-div">
          <div>Self Drive: Enjoy complete privacy and freedom.</div>
          <div> With Driver: Sit back, relax, and enjoy the ride</div>
        </div>
        <hr />
        <h2>Why ZikRme Rental Service?</h2>
        <div className="why-zikrme-rental-service-div">
          <div>
            Flexible Plans – Hourly / Daily / Weekly / Doorstep Delivery &
            Pickup (on request)
          </div>
          <div> Affordable pricing with zero hidden fees</div>
          <div>Trusted by travelers, locals & professionals</div>
        </div>

        <hr />
        <h2>How to Book?</h2>
        <div className="how-to-book-div">
          <p>Send your rental inquiry on WhatsApp with details:</p>
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
        </div>
      </div>
    </div>
  );
}

export default BikeRental