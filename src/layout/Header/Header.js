/*
Component: src/component/Header/Header.js
*/

import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header id='main' className="Header">
      <nav >
        <h3>
          <Link to='/'>
            <p>FTS US NFT EXPLORER</p>
          </Link>
        </h3>
      </nav>

    </header>
  )
};
export default Header;
