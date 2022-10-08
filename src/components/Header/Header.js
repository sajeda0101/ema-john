import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header bg-black  text-white flex items-center justify-between px-36 py-4">
      <img src={logo} alt="" />
      <nav >
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Orders</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
      </nav>
    </div>
  );
};

export default Header;
