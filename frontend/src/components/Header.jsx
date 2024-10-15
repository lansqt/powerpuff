import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/App.css';

const Header = () => {
  return (
    <header className="header">
      <img src="/src/assets/logowithtext.png" alt="Dominguez Dental Clinic Logo" className="logo" />
      <nav className="nav">
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="#why-ddc">Why DDC</a>
        <a href="#dentistssec">Dentists</a>
        <a href="#contact-us">Contact Us</a>
      </nav>
      <div className="header-buttons">
        <Link to="/login">
          <button className="login-btn">Log In</button>
        </Link>
        <button className="appoint-btn">Appoint Now</button>
      </div>
    </header>
  );
};

export default Header;
