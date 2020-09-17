import React from "react";
import "../assets/stylecss/Player.css";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Player({ spotify }) {
  return (
    <div>
      <div className="player">
        <div className="player__body">
          <Sidebar />
          <Body spotify={spotify} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
