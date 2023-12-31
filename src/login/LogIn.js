import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
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

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        email,
        password,
      });
      // Jika respons berhasil dan berisi token JWT
    if (response.data && response.data.token) {
      // Simpan token ke localStorage setelah berhasil login
      localStorage.setItem('token', response.data.token);
      // Lakukan navigasi ke halaman profil pengguna
      window.location.href= 'http://localhost:3000/Dashboard';
    }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

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

            <div className="login-email">
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
            <div className="login-password">
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
            <Link  className="button-sing-up" onClick={handleLogin}>Log In</Link>
            </div>
            <div className="frame">
              <div className="text-wrapper-6">Don't have an account?</div>
              <div className="text-wrapper-7">
                <Link to="/SignUp">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="konten-gambar-login">
          <img className="my-login" alt="MyLogin" src={image1} />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
