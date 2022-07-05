import React from "react";
import "./css/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <h2 className="nav-logo">LOGO</h2>

        <input
          type="search"
          className="search__input"
          placeholder="Search for the college"
        />
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
