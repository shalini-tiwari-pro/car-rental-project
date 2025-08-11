import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo3.png";
import twitter from "../../assets/twitter.png"
import blogger from "../../assets/blogger.jpg"
import {Link} from "react-router-dom"
const Footer = () => {
    return (
      <div className="footer-main-div">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="ZikRme Logo" className="logo-img" />
            <p className="footer-tagline">
              Explore unique, personalized travel <br /> experiences with ZikRme
              worldwide
            </p>
            <div className="subscribe-box">
              <input type="email" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer-data-div">
            <div className="sub-div">
              <div className="sub-heading">COMPANY</div>
              <div>
                <p>About Us</p>

                <p>Careers</p>
                <Link to="/privacypolicy" className="link-tag">
                  <p>Privacy Policy</p>
                </Link>
                <Link to="/termcondition" className="link-tag">
                  <p>Term & Condition</p>
                </Link>
              </div>
            </div>
            <div className="sub-div">
              <div className="sub-heading">SERVICES</div>
              <div>
                <p>Local Car Rentals</p>
                <p>Outstation Taxi</p>
                <p>One Way Cabs</p>
                <p>Corporate Cars Rental</p>
                <p>Airport taxi</p>
                <p>Tempo Travellers And Minibuses</p>
              </div>
            </div>
            <div className="sub-div">
              <div className="sub-heading">GET IN TOUCH</div>
              <div>
                <div className="footer-icons">
                  <p className='blogger-para'>
                 <img src={blogger} alt="blogger" className='blogger-logo'/>
                  </p>

                  <p>
                    <i class="ri-facebook-fill"></i>
                  </p>
                  <p>
                    <i class="ri-whatsapp-line"></i>
                  </p>
                  <p className='twitter-para'>
                  <img src={twitter} alt="twitter" className='twitter-logo'/>
                  </p>
                  <p>
                    <i class="ri-instagram-line"></i>
                  </p>
                </div>
                <p>Contact us</p>
                <p>Travel Agent</p>
                <p>Sitemap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer