import React from 'react';
import './SplashScreen.css';
import logo from '../logo1.png';
import bg from '../Bg.jpg'

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img
        className="background-image"
        src={bg}
        alt="Splash Background"
      />
        <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default SplashScreen;
