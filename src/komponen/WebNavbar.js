
import React from "react";
import "./WebNavbar.css";
import image1 from "../aset/logo1.png";
import image2 from "../aset/elips.png";
import image3 from "../aset/plus.png";
import image4 from "../aset/home-1.png";
import image5 from "../aset/folder.png";
import image6 from "../aset/favorite.png";
import image7 from "../aset/profile.png";
import image8 from "../aset/logout.png";

const WebNavbar = () => {
  return (
    <div className="web-navbar">
        <img className="img" alt="Ellipse" src={image1} />
        <div className="make-new">
          <img className="bundar" alt="Ellipse" src={image2} />
          <img className="plus" alt="Ellipse" src={image3} />
        </div>
        <div className="menu">
        <img className="icon-home" alt="Home" src={image4} />
        <img className="icon-folder" alt="Folder" src={image5} />
        <img className="icon-favorite" alt="Favorite" src={image6} />
        <img className="icon-profile" alt="Profile" src={image7} />
        </div>
        <div className="logout">
          <img className="logout" alt="Log-out" src={image8} />
        </div>
    </div>
  );
}
export default WebNavbar;
