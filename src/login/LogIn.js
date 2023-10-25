import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import image1 from "../aset/LogIn.png";
import image2 from "../aset/Google.png";
import image4 from "../aset/Line 1.png";
import image5 from "../aset/Line 2.png";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //const handleLogin = () => {
    // Handle login logic here, e.g., send data to the server
  //  console.log("Email:", email);
  //  console.log("Password:", password);
  //};

  return (
    <div className="SignUp">
      <div className="konten">
        <div className="konten-signup">
          <div className="div">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-2">Log In</div>
                <div className="text-wrapper-3">to Get Full Access</div>
              </div>
            </div>
            <div className="btn-sing-up-with">
              <img className="flat-design-google" alt="Flat design google" src={image2} />
              <div className="sign-up-with-google">Log in&nbsp;&nbsp;with Google</div>
            </div>
            <div className="OR">
              <img className="line" alt="Line" src={image4} />
              <div className="text-wrapper-8">OR</div>
              <img className="line" alt="Line" src={image5} />
            </div>

            <div className="email">
            <div className="input-container">
              <input
                className="box"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
            </div>
            <div className="password">
            <div className="input-container">
              <input
                className="box-pass"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="icon-eye-login"
                onClick={togglePasswordVisibility}
              />
              </div>
            </div>
            <div className="button">
            <Link to="/Home" className="button-sing-up">Log In</Link>
            </div>
            <div className="frame">
              <div className="text-wrapper-6">Don't have an account?</div>
              <div className="text-wrapper-7">
                <Link to="/SignUp">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="konten-gambar">
          <img className="my-ima" alt="My Image" src={image1} />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
