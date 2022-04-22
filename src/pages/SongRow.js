import React from "react";
import "./SongRow.css";
import image1 from "../images/image1.webp";

function SongRow() {
  return (
    <div className="songRow">
      <img className="songRow__album" src={image1} alt="songRow logo"></img>
      <div className="songRow__info">
        <h1>Track Name</h1>
      </div>
    </div>
  );
}

export default SongRow;
