import React from 'react'
import { Link } from "react-router-dom"
import "./TermCondition.css"
const TermCondition = () => {
  return (
    <div className="term-condition-main-div">
      <h1 style={{ textAlign: "center" }}>Terms and Conditions – ZikRme</h1>
      <div>
        <b>Applies To:</b>
        <p>
          All users of ZikRme's website, app, WhatsApp booking, and services.
        </p>
        <hr />
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using ZikRme or any related service, you agree to be
          bound by these Terms & Conditions and our Privacy Policy. If you do
          not agree, please do not use our services.
        </p>
        <hr />
        <h2>2. Services Offered</h2>
        <p>ZikRme provides the following services:</p>
        <div className="service-offered-div">
          <div>Cab booking (local, one-way, round-trip, airport)</div>
          <div> Bike and car rental (self-drive / with driver)</div>
          <div>Hotel, resort, and restaurant reservations </div>
          <div> Adventure & water park ticketing</div>
          <div>Customized tours and travel packages across India</div>
          <div> General tourist information & customer support</div>
        </div>
        <p>All services are subject to availability and vendor confirmation.</p>
        <hr />
        <h2>3. User Responsibilities</h2>
        <p>As a user of ZikRme, you agree to:</p>
        <div className="user-reponsibilities-div">
          <div>Provide accurate and complete information while booking</div>
          <div>Carry valid ID proof during cab/rental service</div>
          <div> Use rented vehicles or booked services responsibly</div>
          <div>
            Pay all dues (booking fee, rental amount, penalties if any) on time
          </div>
        </div>
        <p>
          Any misuse, damage, false bookings, or misconduct will result in
          cancellation, fines, or legal action.
        </p>
        <hr />
        <h2>4. Booking Confirmation</h2>
        <div className="booking-confirmation-div">
          <div>
            All bookings are confirmed only after full or advance payment
          </div>
          <div> You will receive confirmation via Email, SMS, or WhatsApp</div>
          <div>
            {" "}
            ZikRme holds the right to cancel a booking if the information is
            found false or incomplete
          </div>
        </div>
        <hr />
        <h2>5. Payment Terms</h2>
        <div className="payment-terms-div">
          <div>
            {" "}
            Payments are accepted via UPI, debit/credit cards, wallets, net
            banking, or third-party gateways
          </div>
          <div>ZikRme does not store your card or UPI details</div>
          <div>Prices are inclusive of applicable taxes unless mentioned</div>
        </div>
        <hr />
        <h2>6. Cancellation & Refund</h2>
        <h3>A. Cab/Bike/Car:</h3>
        <div className="cab-div">
          <div> Free cancellation up to 2 hours After booking</div>
          <div>
            After 2 hours, cancellation fee may apply  No refund for no-show or
            incorrect usage
          </div>
        </div>
        <h3>B. Hotels & Trips:</h3>
        <div className="hotels-div">
          <div> Follow vendor-specific cancellation policy</div>
          <div>Refunds (if applicable) are processed within 7 working days</div>
        </div>
        <hr />
        <h2>7. Rental Policies</h2>
        <div className="rental-policies-div">
          <div>
            {" "}
            Self-drive rentals require a valid Driving License and
            Aadhaar/Passport
          </div>
          <div>
            {" "}
            Vehicles must be returned on time and in original condition
          </div>
          <div>
            {" "}
            Late return, damage, or traffic violations will incur extra charges
          </div>
        </div>
        <hr />
        <h2>8. Limitation of Liability</h2>
        <p>ZikRme shall not be liable for:</p>
        <div className="limitation-of-liability-div">
          <div>Delays caused by third-party vendors, traffic, or weather</div>
          <div>Damage/loss during trips or customer negligence</div>
          <div>
            {" "}
            Errors caused by incorrect user input or third-party failures
          </div>
        </div>
        <p>
          Our liability is limited to the amount paid by the customer for the
          service.
        </p>
        <hr />
        <h2>9. Prohibited Conduct</h2>
        <p>You must not:</p>
        <div className="prohibited-conduct-div">
          <div>Use the platform for illegal activities</div>
          <div> Post abusive, false, or misleading information</div>
          <div>Harass service providers or staff</div>
          <div>Attempt to hack or misuse the system</div>
        </div>
        <p>
          ZikRme reserves the right to ban or block any user without notice for
          violation of terms.
        </p>
        <hr />
        <h2>10. Intellectual Property</h2>
        <p>
          All content on the platform (logo, text, photos, designs) is the
          property of ZikRme and cannot be copied or used without permission.
        </p>
        <hr />
        <h2>11. Third-Party Services</h2>
        <p>
          ZikRme works with third-party vendors (hotels, cab drivers, rental
          agencies, parks, etc.). We are not liable for delays, errors, or
          behavior from third parties but we take complaints seriously and act
          on valid feedback
        </p>
        <hr />
        <h2>12. Changes to Terms</h2>
        <p>
          ZikRme may update these Terms at any time without prior notice. Users
          are responsible for reviewing the Terms regularly
        </p>
        <hr />
        <h2>13. Governing Law & Jurisdiction</h2>
        <p>
          All legal matters, disputes, or claims related to ZikRme shall be
          handled under the jurisdiction of the Courts in Meerut, Uttar Pradesh
          (India) only
        </p>
        <hr />
        <h2>14. Contact Us</h2>
        <p>For any queries, support, or legal concerns, contact:</p>
        <p> Email: contact@zikrme.com</p>
        <b> WhatsApp:</b>
        <div className="contact-us-div">
          <div className="whatsapp-link-div">
            <Link className='whatsapp-link'
              to="https://wa.me/917310624101?text=Hello%20ZikRme%20Team%20%2C%20I%20am%20interested%
20in%20your%20services.%20Please%20share%20more%20information.%20Thank%20you!"
            >
              Click to Chat
            </Link>
          </div>
          <b> Website:</b>
          <div className='zikrme-link-div'><Link to="https://zikrme.com/" className='zikrme-link'> www.zikrme.com</Link></div>
        </div>
        <hr />
        <h2>ZikRme – Zero Hassle | Instant Booking | Trusted Travel</h2>
      </div>
    </div>
  );
}

export default TermCondition