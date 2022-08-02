import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="cata-list">
          <div className="wrap-logo">
            <span>TMDB</span>
            <div className="logo"></div>
          </div>
          <ul>
            <li className="list-item">
              <a href="#">Movie</a>
            </li>
            <li className="list-item">
              <a href="#">Tv Show</a>
            </li>
            <li className="list-item">
              <a href="#">People</a>
            </li>
            <li className="list-item">
              <a href="#">More</a>
            </li>
          </ul>
        </div>
        <div className="wrap-search">
          <span>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <span>Search</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
