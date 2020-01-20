import React from "react";
import "./header.css";

const sharp = "#";

const Header = () => {
  return (
    <header className="header">
      <div className="l_wrapper l_header">
        <div className="header-inside clearfix">
          <a href={sharp} className="header-logo">
            Lindo
          </a>
          <nav className="nav">
            <h1 className="nav-h1">Global Navigation Menu</h1>
            <ul className="nav-menu">
              <li>
                <div className="search">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </li>
              <li>
                <a href={sharp}>Profile</a>
              </li>
              {/* <li>
          <a href="./boardWrite.html">글쓰기</a>
        </li>
        <li>
          <a href="./signin.html">시작하기</a>
        </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
