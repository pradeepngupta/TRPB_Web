import React from "react";

import "./MenuInfo.css";

const MenuInfo = () => {
    return (
        <div className="section">
        <div className="container grid-container">
          <div>
            <div className="menu-info-content">
              <h2 className="heading-secondary">
                  A few words about <span>Royal Paratha</span>
              </h2>
              <p>
                <span className="special-word">Royal Paratha</span> is 9” Heavily Stuffed Paratha prepared on tawa with 
                <span className="special-word">PURE GHEE</span> and served with Makhan (Butter), Curd (or choice of Gravies), Salad, Pickle, Tomato Sauce & Green Chutney and Lots of Love.<br/>
                This typically serves 1-2 people.
              </p>
            </div>
          </div>

          <div>
            <div className="menu-info-content">
              <h2 className="heading-secondary">
                  Our <span>Offerings</span>
              </h2>
              <p>
                <span className="special-word">Unlimited Royal Paratha</span> - Only for Dine in. 
              </p>
              <p>
                <span className="special-word">Family Pack Royal Paratha</span> - For Dine in / Take Away / Home Delivery (In the packs of 3 / 6 /9 Royal Paratha).
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MenuInfo