import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Sidebar.css";

export default function Sidebar() {
  const [togglebar, setTogglebar] = useState(false);
  return (
    <div>
      {!togglebar && (
        <div>
          <FaBars
            className="openSideBar"
            onClick={() => setTogglebar(!togglebar)}
          />
        </div>
      )}
      <div>
        {togglebar && (
          <div className="sidebar_wrapper">
            <div className="closeSideBar_wrapper">
              <p className="home">Home</p>
              <div>
                <FaTimes
                  className="closeSideBar"
                  onClick={() => setTogglebar(!togglebar)}
                />
              </div>
            </div>

            <p className="links">NGOs</p>
            <p className="links">Events</p>
            <p className="links">About Us</p>
          </div>
        )}
      </div>
    </div>
  );
}
