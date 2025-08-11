import React from 'react'
import { Link } from "react-router-dom"
import "./TourService.css"
const TourService = () => {
  return (
    <div className="tour-service-main-div">
      <h1 style={{ textAlign: "center" }}>
        Explore India with Ease – Personalized Tours by ZikRme
      </h1>
      <div>
        <h2>About Our Tour Service:</h2>
        <p>
          At ZikRme, we believe travel should be stress-free, inspiring, and
          memorable. Our Tours & Trips service is designed for every kind of
          traveler — from solo explorers to family vacationers, from adventure
          seekers to spiritual wanderers. Whether you're planning a weekend
          getaway, a honeymoon trip, a corporate tour, or a spiritual yatra, we
          offer custom-made tour packages across India’s top destinations.
        </p>
        <hr />
        <h2>Our Tour Services Include:</h2>
        <div className="our-tour-services-include-div">
          <div>Complete Itinerary Planning </div>
          <div>Hotel Booking & Accommodation</div>
          <div>Pickup & Local Transport</div>
          <div>Adventure & Activity Packages</div>
          <div> Pilgrimage & Heritage Tours</div>
          <div>Family & Group Packages</div>
          <div> Yoga & Wellness Retreats</div>
        </div>
        <hr />
        <h2>Top Destinations Covered:</h2>
        <div className="top-destinations-covered-div">
          <div>Leh–Ladakh, Kashmir, Himachal, Uttarakhand</div>
          <div>Rajasthan, Gujarat, Goa, Kerala, Andaman </div>
          <div>Northeast India – Meghalaya, Sikkim, Assam</div>
          <div>Varanasi, Ayodhya, Ujjain, Haridwar </div>
          <div>Custom plans for anywhere in India</div>
        </div>
        <hr />
        <h2>Why Choose ZikRme Tours?</h2>
        <div className="why-choose-zikrme-tour-div">
          <div>100% Customizable Itineraries</div>
          <div>Time-Saving, Hassle-Free Planning</div>
          <div>Dedicated Travel Experts</div>
          <div>Affordable Pricing & Transparent Costs</div>
          <div>24x7 Support Throughout Your Journey</div>
        </div>

        <hr />

        <h2>Popular Tour Types:</h2>
        <div className="popular-tour-type-div">
          <div> Weekend Getaways</div>
          <div> Honeymoon Tours</div>
          <div> Religious Yatras</div>
          <div> Hill Station Retreats </div>
          <div>Budget Backpacking</div>
          <div>Adventure & Waterfall Trips</div>
          <div>B2B Corporate Tours</div>
        </div>
        <hr />
        <h2>How to Book?</h2>
        <p>
          Just send us your travel destination, dates, and preferences on
          WhatsApp, and our team will create a tailored package for you.
        </p>
        <div className="how-to-book-div">
          <div className="whatsapp-link-div">
      
            <Link className='whatsapp-link'
              to="https://wa.me/917310624101?text=Hello%20ZikRme%20Team%20%2C%0AI%20would%20like%20t
o%20book%20a%20cab.%0A%0A🚖%20Name%3A%20[Your%20Name]%0A📞%20Phone%3A%20[Yo
ur%20Phone]%0A🛣️%20Trip%20Type%3A%20[One%20Way%20%2F%20Round%20Trip%20%2F%20
Local%20%2F%20Airport]%0A📍%20Pickup%20Location%3A%20[Pickup%20Point]%0A🎯%20Drop%
20Location%3A%20[Drop%20Point]%0A📅%20Pickup%20Date%2FTime%3A%20[Date%20Time]%0A
👥%20Passengers%3A%20[Count]%0A🚘%20Cab%20Type%3A%20[Sedan%2C%20SUV%2C%20Hatch
back]%0A%0APlease%20confirm%20availability%20and%20fare.%20Thank%20you!"
            >
              <p> 👉 Click to Plan Your Trip on WhatsApp</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourService