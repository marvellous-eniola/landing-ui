import React from "react";
import "../Styles/Footer.css";
import footer1 from "../assets/footer1.svg";
import footer2 from "../assets/footer2.svg";
import footer3 from "../assets/footer3.svg";

export default function Footer() {
  return (
    <div>
      <div className="footer_header">
        <h2>Most Recommended NGOs</h2>
        <div className="sort">
          <h3>Sort By</h3>
          <p>Recommended</p>
          <p>Name</p>
          <p>Newest</p>
        </div>
      </div>
      <div className="footer_card_wrapper">
        <div className="footer_card">
          <div className="footer_wrapper">
            <img className="footer_img" src={footer1} alt="" />
            <div className="footer_card_text">
              <div className="footer_aim">
                <h3 className="ngo">NGO Name1</h3>
                <p className="footer_parag">
                  Our work aims to break the vicious cycle of poverty and social
                  isolation and to restore hope for a better future.
                </p>
              </div>
              <div className="footer_flex">
                <p>Blood Donation NGO</p>
                <button>Read more</button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="footer_aim">
            <div className="footer_wrapper">
              <img src={footer2} className="footer_img" alt="" />
              <div className="footer_card_text">
                <h3 className="ngo">NGO Name1</h3>

                <p className="footer_parag">
                  Our work aims to break the vicious cycle of poverty and social
                  isolation and to restore hope for a better future.
                </p>
                <div className="footer_flex">
                  <p>Blood Donation NGO</p>
                  <button>Read more</button>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="footer_aim">
            <div className="footer_wrapper">
              <img src={footer3} className="footer_img" alt="" />
              <div className="footer_card_text">
                <h3 className="ngo">NGO Name1</h3>
                <p className="footer_parag">
                  Our work aims to break the vicious cycle of poverty and social
                  isolation and to restore hope for a better future.
                </p>
                <div className="footer_flex">
                  <p>Blood Donation NGO</p>
                  <button>Read more</button>
                </div>
              </div>
            </div>
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
