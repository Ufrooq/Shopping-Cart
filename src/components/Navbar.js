import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <nav className="navbar justify-content-between p-3">
      <a className="navbar-brand">
        <h1>Navbar</h1>
      </a>
      <div className="d-flex align-items-center">
        <Link to="/" className="m-2">
          Home
        </Link>
        <Link to="/list" className="m-2">
          Items
        </Link>
        <span style={{ fontSize: "30px", color: "palevioletred" }}>
          Cart items : {cartItems}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
