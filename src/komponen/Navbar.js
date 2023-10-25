import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="text-wrapper">Notepy</Link>
        <div className="frame">
          <div className="div-wrapper">
            <Link to="/" className="div">Beranda</Link>
          </div>
          <div className="frame-2">
            <Link to="/fitur" className="text-wrapper-2">Fitur</Link>
          </div>
          <div className="frame-3">
            <Link to="/kontak" className="text-wrapper-2">Kontak</Link>
          </div>
        </div>
        <Link to="/LogIn" className="frame-4">Masuk</Link>
      </div>
    </div>
  );
}

export default Navbar;
