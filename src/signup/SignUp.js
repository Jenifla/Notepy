import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./singup.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import image1 from "../aset/SignUp.png";
import image2 from "../aset/Google.png";
import image4 from "../aset/Line 1.png";
import image5 from "../aset/Line 2.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="SignUp">
      <div className="konten">
        <div className="konten-gambar">
          <img className="my-scattered" alt="My scattered" src={image1} />
        </div>
        <div className="konten-signup">
          <div className="div">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-2">Sign Up</div>
                <div className="text-wrapper-3">Create Your Own Notes</div>
              </div>
            </div>
            <div className="btn-sing-up-with">
              <img className="flat-design-google" alt="Flat design google" src={image2} />
              <div className="sign-up-with-google">Sign up&nbsp;&nbsp;with Google</div>
            </div>
            <div className="OR">
              <img className="line" alt="Line" src={image4} />
              <div className="text-wrapper-8">OR</div>
              <img className="line" alt="Line" src={image5} />
            </div>
            <div className="username">
              <div className="input-username">
                <input
                className="box-username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="email">
              <div className="input-email">
                <input
                className="box-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="password">
              <div className="input-password">
                <input
                className="box-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="icon-eye-signup"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <div className="button">
              <Link to="/LogIn" className="button-sing-up">Sign Up</Link>
            </div>
            <div className="frame">
              <div className="text-wrapper-6">Already have an account?</div>
              <div className="text-wrapper-7">
              <Link to="/LogIn">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
