import React from "react";
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import image1 from "../aset/Ellipse 2.png";
import image2 from "../aset/logo.png";
import image3 from "../aset/Line 6.png";
import image4 from "../aset/Line 7.png";
import image5 from "../aset/Line 8.png";
import image6 from "../aset/Line 9.png";
import Navbar from './Navbar'; 

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
      <div className="div">
          <div className="overlap-group">
          <div className="konten-logo">
              <div className="overlap-group-2">
                <div className="ellipse" />
                <img className="img" alt="Ellipse" src={image1} />
                <img className="sehatyuk" alt="Sehatyuk" src={image2} />
                <img className="line" alt="Line" src={image3} />
                <img className="line-2" alt="Line" src={image5} />
                <img className="line-3" alt="Line" src={image6} />
                <img className="line-4" alt="Line" src={image4} />
              </div>
            </div>
          <div className="konten-text">
            <div className="overlap-text">
            <h1>Selamat datang di Notepy</h1>
            <p>
              Buat catatan anda sendiri bersama saya dan nikmati kemudahan dalam mencatat.
              Mulailah perjalanan pencatatan hari ini dan rasakan produktivitas harian anda!
            </p>
            <button> <Link to="/SignUp" className="button-bergabung">Bergabung</Link></button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;