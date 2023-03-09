import React from "react";
import Main from "../Main/Main.js";
import Navbar from "../Navbar/Navbar.js";
import Salebar from "../Salebar/Salebar.js";

function Header() {
  return (
    <>
      <Navbar />
      <Salebar />
      <Main />
    </>
  );
}

export default Header;
