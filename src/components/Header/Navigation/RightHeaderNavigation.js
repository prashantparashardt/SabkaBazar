import React from "react";
import "./RightHeaderNavigation.scss";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const RightHeaderNavigation = (props) => {
  const linkStyle = {
    textDecoration: "none",
    color: "#282c34",
    fontSize: "0.8rem",
    fontWeight: "600",
  };
  return (
    <nav className="nav_right">
      <ul className="nav_right__list">
        <li>
          <Link to="/signin" style={linkStyle}>
            SignIn
          </Link>
        </li>
        <li>
          <Link to="/register" style={linkStyle}>
            Register
          </Link>
        </li>
      </ul>
      <Cart cartItems={props.cartItems} openCartWindow={props.openCartWindow} />
    </nav>
  );
};

export default RightHeaderNavigation;
