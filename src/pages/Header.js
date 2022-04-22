import React from "react";
import "./Header.css";
import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input placeholder="Search" type="text" />
      </div>
      <div className="header__right">
          <Avatar src="" alt="CJ" />
          <h4>CJ</h4>
      </div>
    </div>
  );
}

export default Header;
