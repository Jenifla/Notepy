
import React, { useState, useEffect } from "react";
import "./NavProf.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory, faTrash} from "@fortawesome/free-solid-svg-icons";
import {   faUserCircle } from "@fortawesome/free-regular-svg-icons";


const NavProf = () => {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/Profile/EditProfil') {
      setActivePage('editprofil');
    } else if (path === '/Profile/Riwayat') {
      setActivePage('riwayat');
    } else if (path === '/Profile/Sampah') {
      setActivePage('sampah');
    }
  }, [])

  const handlePageChange = (page) => {
    setActivePage(page);
    if (page === "editprofil") {
      window.location.href = '/Profile/EditProfil';
    } else if (page === "riwayat") {
      window.location.href = '/Profile/Riwayat';
    } else if (page === "sampah") {
      window.location.href = '/Profile/Sampah';
    } 
  };

 

  return (
    <div className="nav-prof">
    <div className="div">
      <div className="overlap-group">
        <div className="text-wrapper">My Profile</div>
      </div>
      <div className="frame">
        <div  className={`frame-wrapper ${activePage === "editprofil" ? "active" : ""}`}
              onClick={() => handlePageChange("editprofil")}> 
          <div className="frame-2">
            <FontAwesomeIcon className="img" alt="Male user" icon={faUserCircle} />
            <div className="text-wrapper-2">Edit Profile</div>
          </div>
        </div>
        <div className="div-wrapper">
        <div
              className={`frame-wrapper ${activePage === "riwayat" ? "active" : ""}`}
              onClick={() => handlePageChange("riwayat")}
            >
          <div className="frame-2">
            <FontAwesomeIcon className="img" alt="Time machine" icon={faHistory} />
            <div className="text-wrapper-2">Riwayat</div>
          </div>
        </div>
        </div>
        <div className="div-wrapper">
        <div
              className={`frame-wrapper ${activePage === "sampah" ? "active" : ""}`}
              onClick={() => handlePageChange("sampah")}
            >
          <div className="frame-2">
            <FontAwesomeIcon className="img" alt="Delete" icon={faTrash} />
            <div className="text-wrapper-2">Sampah</div>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
);
};

export default NavProf