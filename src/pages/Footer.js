import React from "react";
import "./Footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
} from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import { PlaylistPlay, VolumeDown } from "@mui/icons-material";
import image1 from "../images/image1.webp";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        {/* <p>Album and song detail</p> */}
        <img src={image1}></img>
        <div className="footer__songInfo">
            <h4>Yeah!</h4>
            <p>Usher</p>
        </div>
      </div>

      <div className="footer__center">
        {/* <p>Player controls</p> */}
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        {/* <p>Volume controls</p> */}
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;


