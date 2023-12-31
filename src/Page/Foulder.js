import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Folder from '../komponen/Folder/Folder'
import WebNavbar from '../komponen/NavBarD/WebNavbar'
import "./Foulder.css";
import defaultAvatar from '../aset/avatar.png';
import "../komponen/Folder/Folder.css";
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import image1 from "../aset/User.png";

const Foulder = () => {
  
  const [user, setUser] = useState({
    foto_profil: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/usersdata', {
          
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const data = response.data; // Mengakses data dari respons Axios
          setUser(data);
          console.log('Data user:', data);
        } else {
          console.error('Gagal mendapatkan data user');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors as needed
      }
    };

    fetchData();
  }, []);

  const fotoProfil = user.foto_profil
  ? `http://localhost:8080/uploads/${user.foto_profil}`
  : defaultAvatar;

  return (
    <div>
      <WebNavbar />
      <div className="folder" style={{ '--tinggi-folder': '100px' }}>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="topsee">
            

            
            <div className="user-prof">
            <div className="image-container"><img className="ellipse" alt="Ellipse" src={fotoProfil} /></div>
              <div className="div">
              {user && ( <>
                <div className="text-wrapper-2">{user.username}</div>
                <div className="text-wrapper-3">{user.email}</div>
                </>
              )}
              </div>
            </div>
          </div>
          <div className="barr">
            <div className="text-wrapper-4">My Folder</div>
          </div>
        
             <Folder/>
          
         
         
          
          
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Foulder
