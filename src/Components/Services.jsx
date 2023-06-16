import React from "react";
import services from "../assets/services.svg";
import donationsImg from "../assets/donations.svg";
import serviceBG from "../assets/serviceBG.svg";
import eventImg from "../assets/events.svg";
import "../Styles/services.css";
export default function Services() {
  return (
    <div>
      <div>
        <div className="services">
          <img className="services_img" src={services} alt="" />
          <div className="category">
            <p>CATEGORY</p>
            <h1>We Offer Best Services</h1>
          </div>
        </div>
        <div className="services_wrapper">
          <div className="services_links">
            <img className="donationImg img1" src={donationsImg} alt="" />
            <p>Donations</p>
            <p className="subtitle">Subtitle</p>
          </div>
          <div className="servicesBG">
            <img className="servicesBG_img" src={serviceBG} alt=""  />
          </div>

          <div className="services_links services_bg">
            <img className="donationImg img2" src={donationsImg} alt="" />
            <p>Donations</p>
            <p className="subtitle">Subtitle</p>
          </div>

          <div className="services_links">
            <img className="eventImg img3" src={eventImg} alt="" />
            <p>Events</p>
            <p className="subtitle">Subtitle</p>
          </div>

         <div className="services_links">
            <img className="eventImg img4"src={eventImg} alt="" />
            <p>Customization</p>
            <p className="subtitle">Subtitle</p>
          </div>
        </div>
      </div>
    </div>
  );
} 


