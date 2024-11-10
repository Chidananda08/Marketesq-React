import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Brisphere</Link>
      <div>
        <a href="#discover">Discover</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
