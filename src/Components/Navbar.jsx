import React from "react";
import navImage from "../assets/navimage.svg";
import "../Styles/Navbar.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
export default function Navbar() {
  return (
    <div>
      <div className="nav_wrapper">
        <div style={{
          display: "flex",
          margin: "0px 20px",
        }}>
          <Sidebar />

        <h2 className="logo">LOGO</h2>
        </div>

        <div className="nav_flex">
          <div>
            <p>Home</p>
          </div>
          <p>NGOs</p>
          <p>Events</p>
          <p>About Us</p>
          <div
            className="image"
            style={{
              backgroundImage: `url(${navImage})`,
              height: "250px",
              width: "200px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <p>Login</p>
            <p>Sign Up</p>
            <p>EN</p>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
}
