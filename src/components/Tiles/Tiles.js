import React from "react";
import "../Tiles/Tiles.css";

function Tiles(props) {
  return (
    <>
      <div className="tiles-menu">{props.text}</div>;
    </>
  );
}

export default Tiles;
