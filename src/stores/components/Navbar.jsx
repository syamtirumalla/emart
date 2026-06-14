import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <div className="navbar-section">
      <div className="navSection">
        <Link to="/" className="custom-link">
          <div className="title">
            <h2>E-Mart</h2>
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search products…" />
        </div>

        <div className="user">
          <div className="user-detail">Sign In / Sign Up</div>
        </div>

        <Link to="/cart" className="custom-link">
          <div className="cart">
            Cart <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>

      <div className="subMenu">
        <ul>
          {[
            ["Mobiles",    "/mobiles"],
            ["Computers",  "/computers"],
            ["Watches",    "/watch"],
            ["Mens Wear",  "/men"],
            ["Women Wear", "/woman"],
            ["Furniture",  "/furniture"],
            ["Kitchen",    "/kitchen"],
            ["Fridge",     "/fridge"],
            ["Books",      "/"],
            ["Speakers",   "/"],
            ["TV's",       "/"],
            ["AC",         "/ac"],
          ].map(([label, path]) => (
            <Link to={path} className="custom-link" key={label}>
              <li>{label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
