import React from "react";
import "../assets/stylecss/Login.css";
import { loginUrl } from "../spotify";

export default function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />

      <a href={loginUrl}>登录 SPOTIFY </a>
    </div>
  );
}
