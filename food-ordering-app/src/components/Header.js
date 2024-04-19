import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "./utilis/url";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

const changeBtn = () => {
  btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
}

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/error">Error</Link>
          </li>
          <li>Cart</li>
          <button onClick={()=>changeBtn()}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
