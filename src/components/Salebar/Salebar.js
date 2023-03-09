import React from "react";
import "../Salebar/Salebar.css";

function Salebar() {
  return (
    <div className="salebar-container">
      <a href="/sale" className="sale-logo">
        <img className="sale-img" src="./images/price.svg" alt="price_logo" />
      </a>
      <ul>
        <li className="sale-shipping">FREE SHIPPING: Physical textbook orders of 85$+</li>
        <li className="sale-code">
          Use Code:<div className="code-color">CHEGGFREESHIP</div>
        </li>
      </ul>
    </div>
  );
}

export default Salebar;
