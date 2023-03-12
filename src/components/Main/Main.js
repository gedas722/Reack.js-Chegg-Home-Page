import React from "react";
import "../Main/Main.css";
import Tiles from "../Tiles/Tiles.js";

function Main() {
  return (
    <div className="main-container">
      <div className="main-header">
        <h1>The Student Hub</h1>
        <h3>Save up to 90% on textbooks *</h3>
      </div>
      <div className="search-bar">
        <input className="search-bar-input" type="text" placeholder="Enter ISBN, title, or author's name"></input>
        <button className="search-bar-btn" type="submit">
          Find book
        </button>
      </div>
      <div className="search-bar-txt">
        <p>21-day satisfaction guarantee, 14 days for eTextBooks</p>
      </div>
      <div className="tile-menu">
        <Tiles text="SELL BOOKS"></Tiles>
        <Tiles text="NEW EXPLORE CARRIERS"></Tiles>
        <Tiles text="24/7 STUDY HELP"></Tiles>
        <Tiles text="RETURN BOOKS"></Tiles>
        <Tiles text="FIND INTERNSHIP"></Tiles>
      </div>
      <div className="main-footer">
        <p>Hate to wait? Courtesy eTextbook when available while your books are on the way. **</p>
      </div>
    </div>
  );
}

export default Main;
