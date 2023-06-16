import React from "react";
import headerImg from "../assets/headerImage.svg";
import "../Styles/Content.css";
export default function Content() {
  return (
    <div>
      <div className="content_wrapper">
        <div className="content">
          <h3 className="top">TOP NGO LISTING</h3>
          <h1 className="welcome">Welcome to the NGO Hub</h1>
          <div className="aim_wrapper">
            <div className="aim">
              <p>
                Our work aims to break the vicious cycle of poverty and social
                isolation and to restore hope for a better future.
              </p>
              <button className="btn">Discover more</button>
            </div>
            <div>
              <img className="headerImg" src={headerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
