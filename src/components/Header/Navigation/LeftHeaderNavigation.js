import React from "react";
import "./LeftHeaderNavigation.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const LeftHeaderNavigation = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#707679",
    fontSize: "0.9rem",
    fontWeight: "600",
  };
  return (
    <nav className="nav_left">
      <Logo />
      <ul className="nav_left__list">
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" style={linkStyle}>
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftHeaderNavigation;
