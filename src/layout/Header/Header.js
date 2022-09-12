/*
Component: src/component/Header/Header.js
*/

import React from "react";
import "./Header.scss";
import { RouteComponentProps } from "react-router-dom";

const Header = (props) => {
  return <div className="Header">{props.name} Component</div>;
};
export default Header;
