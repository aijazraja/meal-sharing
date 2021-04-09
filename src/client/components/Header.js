import Navigation from "./Navigation";
import React from "react";
import { Link } from "react-router-dom";

export default function Header({ meals }) {
  return (
    <div className="header">
      <div className="headerLogo">
      <Link to="/">
                <img
                  src="./src/client/assets/images/logo1.jpg"
                  width="100px"
                  height="100px"
                  alt="logo"
                />
              </Link>
       
      </div>
      <Link to="/">
      <div className="headerText">
      
      <h2><i>Meal Sharing <br/> "Come make and share food with us"</i> </h2>
      
      </div>
      </Link>
      
      <div className="navbar">
        <Navigation />
      </div>
    </div>
  );
}
