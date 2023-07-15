import React from "react";
import "./Header.css";
import { logoWhite } from "../../assets/assets";

const Header = () => {
  return (
    <div>
      <div className="w-full p-6 h-70 back">
        <img src={logoWhite} />
      </div>
    </div>
  );
};

export default Header;
