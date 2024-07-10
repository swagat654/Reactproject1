import React from 'react';
import './TopHeader.css';
import logo from '../assets/Tatalogo.png'; // Import the logo file

const TopHeader = () => {
  return (
    <div>
      {/* New header with logo */}
      <div className="new-header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
      </div>

      {/* Previous header below with text */}
      <div className="top-header">
        <div className="header-title">
          <h1>Emergency Response Team @ HBF</h1>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
