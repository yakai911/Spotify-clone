import React from "react";
import "../assets/stylecss/Footer.css";
import {
  PlayCircleOutline,
  SkipNext,
  SkipPrevious,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://i.scdn.co/image/ab67616d0000485176a41d4b220ac49ce356419d"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Abba Zabba - London 1974</h4>
          <p>Captain Beefheart</p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__icon" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__icon" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown aria-label="靜音" />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
