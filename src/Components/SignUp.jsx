import React, { useState } from "react";
import "../Styles/SignUp.css";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import backgroundImage from "../assets/signUp.svg";

export default function SignUp() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="center">
          <h2>Create Account</h2>
          <div className="signup_flex">
            <p className="parag_flex">
              <img src={Google} alt="" />
              Sign up with Google
            </p>
            <p className="parag_flex">
              <img src={Facebook} alt="" />
              Sign up with Facebook
            </p>
          </div>
          <p className="or">-OR-</p>
          <form>
            <input
              className="email input"
              type="email"
              placeholder="Email Address"
            />
            <div className="input_wrapper">
              <input
                className="password input"
                type={!isVisible ? "password" : "text"}
                placeholder="Password"
              />
              <span className="eye" onClick={toggle}>
                {isVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <button className="btn">Create Account</button>
          </form>
          <div className="already_have_account">
            <p>Already Have an Account?</p>
            <a className="sign_in">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
