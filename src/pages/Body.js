import React from "react";
import "./Body.css";
import Header from "./Header";
import image1 from "../images/image1.webp";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@mui/icons-material";
import SongRow from "./SongRow";


function Body() {
  return (
    <div className="body">
      {/* this is body */}
      <Header />

      <div className="body__info">
        <img src={image1} alt="image"></img>
        <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>description...</p>
        </div>
      </div>

      <div className="body__songs">
          <div className="body__icons">
              <PlayCircleFilled className="body__shuffle" />
              <Favorite fontSize="large" />
              <MoreHoriz />
          </div>

          {/* List of songs */}

          <SongRow />
          <SongRow />
          <SongRow />

          <SongRow />
          <SongRow />
          <SongRow />
      </div>
    </div>
  );
}

export default Body;
