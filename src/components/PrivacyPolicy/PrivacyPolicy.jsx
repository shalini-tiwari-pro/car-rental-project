import React from 'react'
import { Link } from "react-router-dom"
import "./PrivacyPolicy.css"
const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-main-div">
      <h1 style={{ textAlign: "center" }}>Privacy Policy – ZikRme</h1>
      <div>
        <h2>Applicable To:</h2>
        <p>
          All users of ZikRme Website, Mobile App, WhatsApp Booking, and other
          connected services.
        </p>
        <hr />
        <h2>1. Introduction</h2>
        <p>
          Welcome to ZikRme, a trusted platform offering tourism, cab & vehicle
          rental, ticketing, hotel, restaurant, and adventure park booking
          services. This Privacy Policy describes how ZikRme collects, uses,
          stores, and protects your personal information when you use our
          services. By using ZikRme, you agree to the terms laid out below.
        </p>
        <hr />
        <h2>2. Data Collection</h2>
        <p>We may collect the following personal information:</p>
        <div className="data-collection-div">
          <div>Full Name, Phone Number, Email Address</div>
          <div>Location and Pickup/Drop details</div>
          <div>ID Proof details for vehicle rentals</div>
          <div>Full Name, Phone Number, Email Address</div>
          <div>Location and Pickup/Drop details</div>
          <div>ID Proof details for vehicle rentals</div>
          <div> Payment and billing information (UPI, card details, etc.)</div>
          <div> Device and browser information for platform optimization</div>
        </div>
        <p>
          We do not store any card or UPI PINs. Payments are processed securely
          through third-party encrypted gateways like Razorpay, Paytm, etc.
        </p>
        <hr />
        <h2>3. How We Use Your Information</h2>
        <p>Your data may be used to:</p>
        <div className="how-we-use-your-information-div">
          <div>Process bookings and payments</div>
          <div>Send confirmations and updates via email/SMS/WhatsApp</div>
          <div> Verify identity for rentals</div>
          <div> Improve service quality and customer support </div>
          <div>Ensure security and legal compliance</div>
        </div>
        <p>
          ZikRme does not sell or share your data with unauthorized third
          parties. All vendors are bound by strict confidentiality agreements.
        </p>
        <hr />
        <h2>4. Bookings & Rentals</h2>
        <p>When you book a cab, bike, car, trip, or any service via ZikRme:</p>
        <div className="booking-and-rentals-div">
          <div>
            {" "}
            You will receive a booking confirmation with time, driver/vehicle
            details (if applicable)
          </div>
          <div>
            {" "}
            ID Proof may be required for rentals (Aadhaar, DL, Passport, etc.)
          </div>
          <div>
            {" "}
            You are liable for timely pickup, proper use of rentals, and return
            conditions
          </div>
        </div>
        <hr />
        <h2>5. Payments</h2>
        <div className="payments-div">
          <div>
            {" "}
            All payments are 100% secure via verified gateways (Razorpay, Paytm,
            Google Pay, UPI, Net Banking, Cards)
          </div>
          <div> ZikRme does not store your card/UPI passwords</div>
          <div>GST invoices can be provided where applicable</div>
        </div>
        <hr />
        <h2>6. Cancellation & Refund Policy</h2>
        <h3>A. Cabs / Rentals:</h3>
        <div className="cab-rentals-div">
          <div>Free cancellation up to 2 hours After Booking</div>
          <div>Late cancellation may attract partial deduction </div>
          <div>No-show or misuse may result in no refund</div>
        </div>
        <h3>B. Hotels/Trips/Parks:</h3>
        <div className="hotels-div">
          <div> Policies may vary based on the partner/vendor</div>
          <div>
            Refunds, if applicable, will be processed within 7 working days
          </div>
        </div>
        <p>
          Note: All refund decisions are subject to platform and partner policy
          verification.
        </p>
        <hr />
        <h2>7. User Responsibilities</h2>
        <p>By using our services, you agree to:</p>
        <div className="user-reponsibilities-div">
          <div>Provide accurate and updated information </div>
          <div> Use services responsibly without misuse or illegal purpose</div>
          <div>
            Respect vendor time and property (vehicles, hotel rooms, etc.)
          </div>
        </div>
        <p>Violation may lead to blacklisting or legal action.</p>
        <hr />
        <h2>8. Dispute Resolution & Legal Jurisdiction</h2>
        <p>
          In case of any dispute, fraud, or legal claim, the matter shall be
          resolved under the exclusive jurisdiction of the Courts in Meerut,
          Uttar Pradesh only
        </p>
        <p>
          ZikRme reserves the right to suspend or terminate any account or
          service for fraudulent or suspicious activity
        </p>
        <hr />
        <h2>9. Security Measures</h2>
        <div className="security-measures-div">
          <div>
            {" "}
            We use SSL encryption, firewall protection, and secure payment
            layers
          </div>
          <div>
            Only authorized staff has access to critical booking/payment data
          </div>
          <div>
            {" "}
            Only authorized staff has access to critical booking/payment data
          </div>
          <div>Regular audits are conducted to maintain security standards</div>
        </div>
        <hr />
        <h2>10. Third Party Links & Integration</h2>
        <p>
          Some services on ZikRme may redirect to third-party providers (hotel
          pages, payment gateways). While we ensure their legitimacy, we are not
          liable for external site behavior. Please read their privacy policies
          separately
        </p>
        <hr />
        <h2>11. Policy Updates</h2>
        <p>
          ZikRme reserves the right to modify this privacy policy at any time.
          Updated versions will be available on our website. Users are
          encouraged to review it periodically
        </p>
        <hr />
        <h2>12. Contact & Support</h2>
        <p>For any queries related to privacy or bookings, contact us at:</p>
        <b>Email:</b>
        <p>: contact@zikrme.com / zikrmeofficial@gmail.com</p>
        <b>WhatsApp:</b>{" "}
        <div className="contact-support-div">
          <div className="whatsapp-link-div">
            <Link
              className="zikrme-link"
              to="https://wa.me/917310624101?text=Hello%20ZikRme%20Team%20%2C%20I%20am%20interested%
20in%20your%20services.%20Please%20share%20more%20information.%20Thank%20you!"
            >
              Click to Chat
            </Link>
          </div>
     
          <div className="zikrme-link-div">
            <Link to="https://zikrme.com/" className="zikrme-link">
              www.zikrme.com
            </Link>
          </div>
        </div>
        <hr />
        <h2>ZikRme – Trusted. Transparent. Travel-Smart.</h2>
        <p>
          By using ZikRme, you agree to our Terms of Use, Cancellation Policy,
          and this Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy
