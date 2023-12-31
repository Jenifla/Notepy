import React from 'react'
import "./Folder.css";
import image1 from "../../aset/User.png";
import Cards from "../Cards/Cards";
import { useState, useEffect } from "react";
import image3 from "../../aset/Love.png";
import image4 from "../../aset/icon edit.png";


const DetailFolder = () => {
  const [folderName, setFolderName] = useState('');

  const displayFolderName = (namaFolder) => {
    setFolderName(namaFolder);
  }
  // Menggunakan useEffect untuk menangani efek samping
  useEffect(() => {
    // Contoh efek samping: memuat data dari API atau sumber data lainnya
    // Misalnya, Anda bisa memuat data catatan dari server di sini
  }, []);

  return (
    <div>
    <div className="folder" style={{ '--tinggi-folder': '100px' }}>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="topsee">
            

            
            <div className="user-prof">
              <img className="ellipse" alt="Ellipse" src={image1} />
              <div className="div">
                <div className="text-wrapper-2">Juan Jacob</div>
                <div className="text-wrapper-3">juanjacob@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="barr">
            <div className="text-wrapper-4">My Folder {folderName && `> ${folderName}`}</div>
          </div>
          <div className="rectangle-2" >
          <Cards/>
          </div>
         
         
          
          
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailFolder
