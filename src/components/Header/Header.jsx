

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import "./Header.css";

const Header = () => {
  /* ─── State to toggle the mobile menu ─── */
  const [menuOpen, setMenuOpen] = useState(false);

  /* ─── Close menu when a link is clicked (mobile) ─── */
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header-section">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="logo" className="header-logo" />
      </div>

      {/* Desktop / Tablet navigation */}
      <nav className={`main-section ${menuOpen ? "show" : ""}`}>
        <ul className="header-ul">
          <li onClick={handleLinkClick}>
            <Link to="/" className="header-link">
              Home
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to="/" className="header-link">
              Booking
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to="/rental" className="header-link">
              Rental
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to="/exploremorecar" className="header-link">
              Select car
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to="/contact" className="header-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger (visible ≤ 768 px) */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {/* Unicode hamburger icon */}☰
      </button>
    </header>
  );
};

export default Header;
