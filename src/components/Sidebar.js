import React from "react";
import "../assets/stylecss/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <SidebarOption title="首页" Icon={HomeIcon} />
      <SidebarOption title="搜索" Icon={SearchIcon} />
      <SidebarOption title="你的音乐库" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">播放列表</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
