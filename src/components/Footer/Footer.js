import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import DirectionsLink from "./DirectionsLink/DirectionsLink";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>The Royal Paratha Box</h3>  
            <p>Hulimanagala Main Road</p>
            <p>DElectronic City Phase 1, Bengaluru</p>
            <p>Karnataka, India</p>
            <DirectionsLink place="The Royal Paratha Box, Electronic City, Bengaluru, India" />
          </div>          
          <div className="footer-grid-item">            
            <Link to="tel:+916366579691" className="text-white">
              (+91) 6366 579 691
            </Link>  
            <p />          
            <Link to="mailto:theroyalparathabox@gmail.com" className="text-white">
              theroyalparathabox@gmail.com
            </Link>
            </div>
            <div className="footer-grid-item">            
              <Link to="/privacypolicy" className="text-white">
                Privacy Policy
              </Link>          
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Footer;
