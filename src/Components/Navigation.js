import React from "react";
import "./navigation.css";

const sharp = "#";

const Navigation = () => {
  return (
    <nav className="nav">
      <h1 className="nav-h1">Global Navigation Menu</h1>
      <ul className="nav-menu">
        <li>
          <div className="search">
            <input className="search-input" type="text" placeholder="Search" />
          </div>
        </li>
        <li>
          <a href={sharp}>Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
