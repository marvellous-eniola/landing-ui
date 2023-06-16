import React from "react";
import ChildCare from "../assets/childcare.svg";
import frame1 from "../assets/list1.svg";
import frame2 from "../assets/list2.svg";
import frame3 from "../assets/list3.svg";
import services from "../assets/services.svg";
import "../Styles/List.css";
export default function Listing() {
  return (
    <div>
      <div>
        {/* <div className="servicec">
          <img className="services_img" src={services} alt="" />
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h3></h3>
            <header></header>
          </div>
        </div> */}
        <div className="">
          <img className="side_img" src={services} alt="" />
          <div className="list_header">
            <p>All NGOs</p>
            <h1>Donate For NGOs</h1>
          </div>
        </div>
        <div className="center_box">
          <div className="list">
            <img className="listImage" src={frame1} alt="" />
            <div className="text_wrapper">
              <div className="card_text">
                <p className="country">Rome, Italy</p>
                <p className="support">
                  Food Donate
                  <img className="card_img" src={ChildCare} alt="" />
                </p>
              </div>
              <button className="donate_btn">Donate</button>
            </div>
          </div>
          <div className="list">
            <img className="listImage" src={frame2} alt="" />
            <div className="text_wrapper">
              <div className="card_text">
                <p className="country">London, UK</p>
                <p className="support">
                  Child Care
                  <img className="card_img" src={ChildCare} alt="" />{" "}
                </p>
              </div>
              <button className="donate_btn">Donate</button>
            </div>
          </div>
          {/*  */}
          <div className="list">
            <img className="listImage" src={frame3} alt="" />
            <div className="text_wrapper">
              <div className="card_text">
                <p className="country">Europe</p>
                <p className="support">
                  Food Donate
                  <img className="card_img" src={ChildCare} alt="" />{" "}
                </p>
              </div>
              <button className="donate_btn">Donate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
