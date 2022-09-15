/*
Component: src/component/Header/Header.js
*/

import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header id='main' className="Header">
      <nav className="nav">
        <h3>
            <Link to='/'>
              FTS US NFT EXPLORER
            </Link>
          </h3>
        <ul>
          <li>
            <Link to='/collections'>Collections</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};
export default Header;
