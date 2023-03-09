import React from "react";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="Home-logo">
            <img src="./images/logo1.png" alt="logo" />
          </a>
          <ul>
            <li>
              <a href="/chegg-study">
                <span>Learn about</span>Chegg Study
              </a>
            </li>
            <li>
              <a href="/sign-in">Sign In</a>
            </li>
            <li>
              <a href="/more">More</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
